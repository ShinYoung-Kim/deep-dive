import { useEffect } from "react";
import { Toast as ToastProps } from "./toast.type";
import { SingleTon } from "./SingleTon";

const Toast = ({ message, id }: ToastProps) => {
	useEffect(() => {
		setTimeout(() => {
			SingleTon.getInstance().removeToast(id);
		}, 3000);
	}, []);

	return <div>{message + id}</div>;
};

export default Toast;
