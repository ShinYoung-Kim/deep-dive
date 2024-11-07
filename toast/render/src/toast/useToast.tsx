import { createRoot } from "react-dom/client";
import Toast from "./Toast";
import { Message } from "./toast.type";
import { flushSync } from "react-dom";

export const useToast = () => {
	const addToast = (message: Message) => {
		const container = document.getElementById("toast");
		const div = document.createElement("div");
		const root = createRoot(div);
		flushSync(() => {
			root.render(<Toast message={message} id={Date.now()} />);
		});
		container?.appendChild(document.createRange().createContextualFragment(div.innerHTML));
	};

	const removeToast = (id: number) => {
		const toast = document.getElementById(id.toString());
		toast?.remove();
	};

	return { addToast, removeToast };
};
