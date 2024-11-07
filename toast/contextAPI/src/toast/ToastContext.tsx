import { createContext } from "react";
import { Message, ToastList } from "./toast.type";

export const ToastContext = createContext<{
	toastList: ToastList;
	addToast: (message: Message) => void;
	removeToast: (id: number) => void;
}>({
	toastList: [],
	addToast: () => {},
	removeToast: () => {},
});
