import { Message, ToastList } from "./toast.type";

const useToast = (function () {
	let toastList: ToastList = [];
	const addToast = (message: Message) => {
		toastList = [...toastList, { id: Date.now(), message }];
	};
	const removeToast = (id: number) => {
		toastList = toastList.filter((toast) => toast.id !== id);
	};

	return {
		toastList,
		addToast,
		removeToast,
	};
})();

export default useToast;
