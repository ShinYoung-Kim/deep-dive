import { useRef } from "react";
import Portal from "./toast/Portal";

const TriggerButton2 = () => {
	const toastRef = useRef<{ addToast: (message: string) => void } | null>(null);
	const addToast = () => {
		if (!toastRef.current) {
			return;
		}

		toastRef.current.addToast("hi");
	};

	return (
		<div>
			<button onClick={addToast}>toast!</button>
			<Portal ref={toastRef} />
		</div>
	);
};

export default TriggerButton2;
