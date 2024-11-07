import { useToastStore } from "./store";
import Toast from "./Toast";

const ToastContainer = () => {
	const { toastList } = useToastStore();

	return (
		<div>
			{toastList.map((toast) => (
				<Toast key={toast.id} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
