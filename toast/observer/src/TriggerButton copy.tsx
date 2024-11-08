import observable from "./toast/observable";

const TriggerButton2 = () => {
	const subject = observable;
	const handleClick = () => {
		subject.notifyObservers("toast222!");
	};

	return <button onClick={handleClick}>toast!</button>;
};

export default TriggerButton2;
