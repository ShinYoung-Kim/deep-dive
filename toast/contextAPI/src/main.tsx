import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ToastProvider } from "./toast/ToastProvider.tsx";
import ToastContainer from "./toast/ToastContainer.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ToastProvider>
			<App />
			<ToastContainer />
		</ToastProvider>
	</StrictMode>
);
