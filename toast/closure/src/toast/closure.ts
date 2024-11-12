import Observer from "./observer";
import { Message, ToastList } from "./toast.type";

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
		get toastList() {
			return toastList;
		},
	};
};

const closure = createClosure();
export { closure };
