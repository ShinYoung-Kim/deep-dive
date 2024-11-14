import { useToast } from "./useToast";

const TriggerButton = () => {
	const { addToast } = useToast();
	const handleClick = () => {
		addToast("hello");
	};

	return <button onClick={handleClick}>toast!</button>;
};

export default TriggerButton;
