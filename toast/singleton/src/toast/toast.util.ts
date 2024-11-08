import { SingleTon } from "./SingleTon";
import { Message } from "./toast.type";

export const getToastList = () => {
	return SingleTon.getInstance().toasts;
};

export const addToast = (message: Message) => {
	SingleTon.getInstance().addToast(message);
};

export const removeToast = (id: number) => {
	SingleTon.getInstance().removeToast(id);
};
