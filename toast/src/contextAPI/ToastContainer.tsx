import Toast from "../common/Toast";
import { useToast } from "./useToast";

const ToastContainer = () => {
	const { toastList, removeToast } = useToast();
	return (
		<div>
			{toastList.map((toast) => (
				<Toast key={toast.id} removeToast={removeToast} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
