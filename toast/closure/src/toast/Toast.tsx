import { useEffect } from "react";
import { Toast as ToastProps } from "./toast.type";
import toast from "./closure";

const Toast = ({ message, id }: ToastProps) => {
	const { removeToast } = toast;

	useEffect(() => {
		setTimeout(() => {
			removeToast(id);
		}, 3000);
	}, []);

	return <div>{message + id}</div>;
};

export default Toast;
