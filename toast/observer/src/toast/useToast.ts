import { useState } from "react";
import { ToastList } from "./toast.type";

export const useToast = () => {
	const [toastList, setToastList] = useState<ToastList>([]);
	const addToast = (message: string) => {
		setToastList([...toastList, { message, id: Date.now() }]);
	};
	const removeToast = (id: number) => {
		setToastList(toastList.filter((toast) => toast.id !== id));
	};

	return { toastList, addToast, removeToast };
};
