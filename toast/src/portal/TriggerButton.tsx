import { useRef } from "react";
import Portal from "./Portal";

const TriggerButton = () => {
	const toastRef = useRef<{ addToast: (message: string) => void } | null>(null);
	const addToast = () => {
		if (!toastRef.current) {
			return;
		}

		toastRef.current.addToast("hello");
	};

	return (
		<div>
			<button onClick={addToast}>toast!</button>
			<Portal ref={toastRef} />
		</div>
	);
};

export default TriggerButton;
