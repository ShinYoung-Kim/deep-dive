import eventChannel from "./eventEmitter";

const TriggerButton = () => {
	const handleClick = () => {
		eventChannel.publish("addToast", "toast!");
	};

	return <button onClick={handleClick}>toast!</button>;
};

export default TriggerButton;
