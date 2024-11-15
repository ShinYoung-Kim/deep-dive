import { useState } from "react";
import { ToastList } from "../common/toast.type";

export const useToast = () => {
	const [toastList, setToastList] = useState<ToastList>([]);
	const addToast = (message: string) => {
		setToastList((prev) => [
			...prev,
			{
				id: Date.now(),
				message,
			},
		]);
	};
	const removeToast = (id: number) => {
		setToastList((prev) => prev.filter((toast) => toast.id !== id));
	};

	return { toastList, addToast, removeToast };
};
