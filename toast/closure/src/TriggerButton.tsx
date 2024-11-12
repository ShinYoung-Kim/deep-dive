import { closure } from "./toast/closure";

const TriggerButton = () => {
	const { addToast } = closure;
	const handleClick = () => {
		addToast("hello");
	};

	return <button onClick={handleClick}>toast!</button>;
};

export default TriggerButton;
