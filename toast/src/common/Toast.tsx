import { useEffect } from "react";
import { Toast as ToastType } from "./toast.type";

type ToastProps = {
	removeToast: (id: number) => void;
} & ToastType;

const Toast = ({ message, id, removeToast }: ToastProps) => {
	const count = document.querySelector("span")?.innerText;
	useEffect(() => {
		setTimeout(() => {
			removeToast(id);
		}, 3000);
	}, []);

	return <div id={`item-${count} ${id}`}>{message + id}</div>;
};

export default Toast;
