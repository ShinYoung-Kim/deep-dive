import { useEffect } from "react";
import { useToast } from "./useToast";
import eventChannel from "./eventEmitter";
import Toast from "../common/Toast";

const ToastContainer = () => {
	const { toastList, removeToast, addToast } = useToast();
	useEffect(() => {
		eventChannel.subscribe("addToast", addToast);
		eventChannel.subscribe("removeToast", removeToast);
		return () => {
			eventChannel.unsubscribe("addToast");
			eventChannel.unsubscribe("removeToast");
		};
	}, []);

	const publishRemoveToast = (id: number) => {
		eventChannel.publish("removeToast", id);
	};

	return (
		<div>
			{toastList.map((toast) => (
				<Toast key={toast.id} removeToast={publishRemoveToast} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
