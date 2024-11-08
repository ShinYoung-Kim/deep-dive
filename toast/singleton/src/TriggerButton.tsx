import { SingleTon } from "./toast/SingleTon";

const TriggerButton = () => {
	const handleClick = () => {
		SingleTon.getInstance().addToast("toast!");
	};

	return <button onClick={handleClick}>toast!</button>;
};

export default TriggerButton;
