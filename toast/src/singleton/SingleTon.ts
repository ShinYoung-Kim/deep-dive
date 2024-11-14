import { Message, ToastList } from "../common/toast.type";

type Observer = (message: Message) => void;

export class SingleTon {
	private static instance: SingleTon;
	private toastList: ToastList = [];
	private observers = new Set<Observer>();

	static getInstance() {
		if (!SingleTon.instance) {
			SingleTon.instance = new SingleTon();
		}
		return SingleTon.instance;
	}

	addToast(message: Message) {
		this.toastList = [...this.toastList, { message, id: Date.now() }];
		this.notifyObservers(message);
	}

	removeToast(id: number) {
		this.toastList = this.toastList.filter((toast) => toast.id !== id);
		this.notifyObservers("Toast removed");
	}

	get toasts() {
		return this.toastList;
	}

	addObserver(observer: Observer) {
		this.observers.add(observer);
	}

	removeObserver(observer: Observer) {
		this.observers.delete(observer);
	}

	notifyObservers(message: Message) {
		this.observers.forEach((observer) => observer(message));
	}
}
