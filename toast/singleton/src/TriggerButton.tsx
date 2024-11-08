import { addToast } from "./toast/toast.util";

const TriggerButton = () => {
	const handleClick = () => {
		addToast("hello");
	};

	return <button onClick={handleClick}>toast!</button>;
};

export default TriggerButton;
