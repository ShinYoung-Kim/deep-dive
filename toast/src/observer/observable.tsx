import { Message } from "./toast.type";

type Observer = (message: Message) => void;
class Observable {
	private observers: Observer[] = [];

	addObserver(observer: Observer) {
		this.observers.push(observer);
	}

	removeObserver(observer: Observer) {
		this.observers = this.observers.filter((o) => o !== observer);
	}

	notifyObservers(message: Message) {
		this.observers.forEach((observer) => observer(message));
	}
}

const observable = new Observable();
export default observable;
