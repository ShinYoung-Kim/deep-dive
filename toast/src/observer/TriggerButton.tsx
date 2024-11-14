import subject from "./observable";

const TriggerButton = () => {
	const handleClick = () => {
		subject.notifyObservers("toast!");
	};

	return <button onClick={handleClick}>toast!</button>;
};

export default TriggerButton;
