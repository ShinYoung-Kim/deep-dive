import { useEffect } from "react";
import { Toast as ToastProps } from "./toast.type";
import eventChannel from "./eventEmitter";

const Toast = ({ message, id }: ToastProps) => {
	useEffect(() => {
		setTimeout(() => {
			eventChannel.publish("removeToast", id);
		}, 3000);
	}, [id]);

	return <div>{message + id}</div>;
};

export default Toast;
