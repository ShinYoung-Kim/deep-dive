import Toast from "../common/Toast";
import { ToastList } from "../common/toast.type";

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
