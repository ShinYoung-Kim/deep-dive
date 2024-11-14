import { create } from "zustand";
import { Message, ToastList } from "../common/toast.type";

export const useToastStore = create<{
	toastList: ToastList;
	addToast: (message: Message) => void;
	removeToast: (id: number) => void;
}>()((set) => ({
	toastList: [],
	addToast: (message) => set((state) => ({ toastList: [...state.toastList, { message, id: Date.now() }] })),
	removeToast: (id) => set((state) => ({ toastList: state.toastList.filter((message) => message.id !== id) })),
}));
