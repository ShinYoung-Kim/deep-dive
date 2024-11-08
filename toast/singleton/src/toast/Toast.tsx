import { useEffect } from "react";
import { Toast as ToastProps } from "./toast.type";
import { removeToast } from "./toast.util";

const Toast = ({ message, id }: ToastProps) => {
	useEffect(() => {
		setTimeout(() => {
			removeToast(id);
		}, 3000);
	}, []);

	return <div>{message + id}</div>;
};

export default Toast;
