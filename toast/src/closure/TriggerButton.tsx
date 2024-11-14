import { closure } from "./closure";

const TriggerButton = () => {
	const { addToast } = closure;
	const handleClick = () => {
		addToast("hello");
	};

	return <button onClick={handleClick}>toast!</button>;
};

export default TriggerButton;
