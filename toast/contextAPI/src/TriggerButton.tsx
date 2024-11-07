import { useToast } from "./toast/useToast";

const TriggerButton = () => {
	const { addToast } = useToast();
	const handleClick = () => {
		addToast("hello");
	};

	return <button onClick={handleClick}>toast!</button>;
};

export default TriggerButton;
