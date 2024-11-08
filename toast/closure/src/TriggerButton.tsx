import toast from "./toast/closure";

const TriggerButton = () => {
	const { addToast } = toast;
	const handleClick = () => {
		addToast("hello");
	};

	return <button onClick={handleClick}>toast!</button>;
};

export default TriggerButton;
