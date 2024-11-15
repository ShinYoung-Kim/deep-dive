import { Message, ToastList } from "../common/toast.type";
import Observer from "./observer";

const createClosure = () => {
	let toastList: ToastList = [];
	return {
		addToast: (message: Message) => {
			toastList = [...toastList, { message, id: Date.now() }];
			Observer.notifyObservers();
		},
		removeToast: (id: number) => {
			toastList = toastList.filter((toast) => toast.id !== id);
			Observer.notifyObservers();
		},
		getToastList: () => toastList,
	};
};

const closure = createClosure();
export { closure };
