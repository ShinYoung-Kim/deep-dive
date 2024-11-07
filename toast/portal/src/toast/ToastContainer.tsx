import Toast from "./Toast";
import { ToastList } from "./toast.type";

type ToastContainerProps = {
	toastList: ToastList;
	removeToast: (id: number) => void;
};

const ToastContainer = ({ toastList, removeToast }: ToastContainerProps) => {
	return (
		<div>
			{toastList.map((toast) => (
				<Toast key={toast.id} removeToast={removeToast} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
