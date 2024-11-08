import Toast from "./Toast";
import toast from "./closure";

const ToastContainer = () => {
	const { toastList } = toast;

	return (
		<div>
			{toastList.map((toast) => (
				<Toast key={toast.id} {...toast} />
			))}
		</div>
	);
};

export default ToastContainer;
