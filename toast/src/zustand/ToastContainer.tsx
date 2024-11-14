import Toast from "../common/Toast";
import { useToastStore } from "./store";

const ToastContainer = () => {
	const { toastList, removeToast } = useToastStore();

	return (
		<div>
			{toastList.map((toast) => (
				<Toast key={toast.id} removeToast={removeToast} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
