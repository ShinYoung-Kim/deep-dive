import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClosurePage from "./closure/Page";
import ContextAPIPage from "./contextAPI/Page";
import ObserverPage from "./observer/Page";
import PortalPage from "./portal/Page";
import ZustandPage from "./zustand/Page";
import SingletonPage from "./singleton/Page";
import RenderPage from "./render/Page";
import PubSubPage from "./pub-sub/Page";

function App() {
	return (
		<BrowserRouter
			future={{
				v7_relativeSplatPath: true,
				v7_startTransition: true,
			}}
		>
			<Routes>
				<Route path="/closure" element={<ClosurePage />} />
				<Route path="/context-api" element={<ContextAPIPage />} />
				<Route path="/observer" element={<ObserverPage />} />
				<Route path="/portal" element={<PortalPage />} />
				<Route path="/pub-sub" element={<PubSubPage />} />
				<Route path="/render" element={<RenderPage />} />
				<Route path="/singleton" element={<SingletonPage />} />
				<Route path="/zustand" element={<ZustandPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
