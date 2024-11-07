import Toast from "./Toast";
import { ToastList } from "./toast.type";

type ToastContainerProps = {
	toastList: ToastList;
};

const ToastContainer = ({ toastList }: ToastContainerProps) => {
	return (
		<div>
			{toastList.map((toast) => (
				<Toast key={toast.id} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
