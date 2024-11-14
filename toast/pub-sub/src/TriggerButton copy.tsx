import eventChannel from "./toast/eventEmitter";

const TriggerButton2 = () => {
	const handleClick = () => {
		eventChannel.publish("addToast", "toast222!");
	};

	return <button onClick={handleClick}>toast!</button>;
};

export default TriggerButton2;
