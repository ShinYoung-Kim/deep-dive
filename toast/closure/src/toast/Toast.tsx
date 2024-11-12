import { useEffect } from "react";
import { Toast as ToastProps } from "./toast.type";
import { closure } from "./closure";

const Toast = ({ message, id }: ToastProps) => {
	const { removeToast } = closure;

	useEffect(() => {
		setTimeout(() => {
			removeToast(id);
		}, 3000);
	}, []);

	return <div>{message + id}</div>;
};

export default Toast;
