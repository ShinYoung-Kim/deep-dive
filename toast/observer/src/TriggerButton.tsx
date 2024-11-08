import observable from "./toast/observable";

const TriggerButton = () => {
	const subject = observable;
	const handleClick = () => {
		subject.notifyObservers("toast!");
	};

	return <button onClick={handleClick}>toast!</button>;
};

export default TriggerButton;
