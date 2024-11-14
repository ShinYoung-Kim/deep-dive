/* eslint-disable @typescript-eslint/no-explicit-any */
type Subscriber = (...args: any[]) => void;

class EventChannel {
	private subscribers: Map<string, Subscriber> = new Map();

	subscribe(event: string, subscriber: Subscriber) {
		this.subscribers.set(event, subscriber);
	}

	unsubscribe(event: string) {
		this.subscribers.delete(event);
	}

	publish(event: string, ...args: any[]) {
		const subscriber = this.subscribers.get(event);
		if (subscriber) {
			subscriber(...args);
		}
	}
}

const eventChannel = new EventChannel();
export default eventChannel;
