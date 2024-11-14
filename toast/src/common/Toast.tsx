import { useEffect } from "react";
import { Toast as ToastType } from "./toast.type";

type ToastProps = {
	removeToast: (id: number) => void;
} & ToastType;

const Toast = ({ message, id, removeToast }: ToastProps) => {
	useEffect(() => {
		setTimeout(() => {
			removeToast(id);
		}, 3000);
	}, []);

	return <div id={id.toString()}>{message + id}</div>;
};

export default Toast;
