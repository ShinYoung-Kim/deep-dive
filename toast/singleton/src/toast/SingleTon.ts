import { Message, ToastList } from "./toast.type";

export class SingleTon {
	private static instance: SingleTon;
	private toastList: ToastList = [];
	static getInstance() {
		if (!SingleTon.instance) {
			SingleTon.instance = new SingleTon();
		}
		return SingleTon.instance;
	}

	addToast(message: Message) {
		this.toastList = [...this.toastList, { message, id: Date.now() }];
	}

	removeToast(id: number) {
		this.toastList = this.toastList.filter((toast) => toast.id !== id);
	}

	get toasts() {
		return this.toastList;
	}
}
