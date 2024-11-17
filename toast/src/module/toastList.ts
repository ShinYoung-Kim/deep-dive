import { Message, ToastList } from "../common/toast.type";
import Observer from "./observer";

let toastList: ToastList = [];
const addToast = (message: Message) => {
	toastList = [...toastList, { message, id: Date.now() }];
	Observer.notifyObservers();
};
const removeToast = (id: number) => {
	toastList = toastList.filter((toast) => toast.id !== id);
	Observer.notifyObservers();
};

export { toastList, addToast, removeToast };
