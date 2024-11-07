import { PropsWithChildren, useState } from "react";
import { ToastList, Message } from "./toast.type";
import { ToastContext } from "./ToastContext";
import ToastContainer from "./ToastContainer";

export const ToastProvider = ({ children }: PropsWithChildren) => {
	const [toastList, setToastList] = useState<ToastList>([]);
	const addToast = (message: Message) => {
		setToastList([...toastList, { message, id: Date.now() }]);
	};
	const removeToast = (id: number) => {
		setToastList(toastList.filter((toast) => toast.id !== id));
	};
	return (
		<ToastContext.Provider value={{ toastList, addToast, removeToast }}>
			{children}
			<ToastContainer toastList={toastList} />
		</ToastContext.Provider>
	);
};
