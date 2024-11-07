import { useEffect } from "react";
import { Toast as ToastProps } from "./toast.type";
import { useToastStore } from "./store";

const Toast = ({ message, id }: ToastProps) => {
	const { removeToast } = useToastStore();
	useEffect(() => {
		setTimeout(() => {
			removeToast(id);
		}, 3000);
	}, []);

	return <div>{message + id}</div>;
};

export default Toast;
