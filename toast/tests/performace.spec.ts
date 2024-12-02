import test from "@playwright/test";
import { TestList, testLists } from "./performance.config";

const performanceTest = (testList: TestList) => {
	test(`${testList}방식의 performance를 비교합니다.`, async ({ page, browser }) => {
		const performance: number[] = [];
		for (let i = 0; i < 10; i++) {
			await browser.startTracing(page, { screenshots: true, path: "trace/testList" });
			await page.goto(`http://localhost:5173/${testList}`);
			await page.evaluate(() => {
				window.performance.mark("start");
			});

			for (let i = 0; i < 100; i++) {
				await page.click("button");
				await page.$eval("span", (el) => (el.textContent = String(Number(el.textContent) + 1)));
			}

			await page.waitForSelector("div#item-100", { state: "detached" });

			await page.evaluate(() => {
				window.performance.mark("end");
				window.performance.measure("overall", "start", "end");
			});

			const measure = await page.evaluate(() => {
				const entry = window.performance.getEntriesByName("overall");
				return entry;
			});

			performance.push(measure[0].duration);

			await browser.stopTracing();
		}

		console.log(performance);
		console.log(performance.reduce((acc, cur) => acc + cur, 0) / performance.length);
	});
};

test.describe("각 Toast 방식의 performance를 비교합니다.", () => {
	for (const testList of testLists) {
		performanceTest(testList);
	}
});
