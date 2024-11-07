import Toast from "./Toast";
import { useToast } from "./useToast";

const ToastContainer = () => {
	const { toastList } = useToast();
	return (
		<div>
			{toastList.map((toast) => (
				<Toast key={toast.id} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
