import { addToast } from "./toastList";

const TriggerButton = () => {
	const handleClick = () => {
		addToast("hello");
	};

	return <button onClick={handleClick}>toast!</button>;
};

export default TriggerButton;
