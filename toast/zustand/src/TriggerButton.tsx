import { useToastStore } from "./toast/store";

const TriggerButton = () => {
	const { addToast } = useToastStore();
	const handleClick = () => {
		addToast("hello");
	};

	return <button onClick={handleClick}>toast!</button>;
};

export default TriggerButton;
