import { useEffect } from "react";
import Toast from "./Toast";
import { useToast } from "./useToast";
import eventChannel from "./eventEmitter";

const ToastContainer = () => {
	const { toastList, removeToast, addToast } = useToast();
	useEffect(() => {
		eventChannel.subscribe("addToast", addToast);
		eventChannel.subscribe("removeToast", removeToast);
		return () => {
			eventChannel.unsubscribe("addToast");
			eventChannel.unsubscribe("removeToast");
		};
	}, [addToast, removeToast]);

	return (
		<div>
			{toastList.map((toast) => (
				<Toast key={toast.id} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
