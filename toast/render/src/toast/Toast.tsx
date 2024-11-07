import { useEffect } from "react";
import { Toast as ToastProps } from "./toast.type";
import { useToast } from "./useToast";

const Toast = ({ message, id }: ToastProps) => {
	const { removeToast } = useToast();
	useEffect(() => {
		setTimeout(() => {
			removeToast(id);
		}, 3000);
	}, []);

	return <div id={id.toString()}>{message + id}</div>;
};

export default Toast;
