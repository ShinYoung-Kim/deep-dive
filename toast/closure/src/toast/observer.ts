class Observer {
	private static observers: Set<() => void> = new Set();

	static addObserver(observer: () => void) {
		this.observers.add(observer);
	}

	static removeObserver(observer: () => void) {
		this.observers.delete(observer);
	}

	static notifyObservers() {
		this.observers.forEach((observer) => observer());
	}
}

export default Observer;
