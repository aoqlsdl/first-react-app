import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./chap_16/components/page/mainPage";
import PostViewPage from "./chap_16/components/page/postViewPage";
import PostWritePage from "./chap_16/components/page/postWritePage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<MainPage />} />
				<Route path="post/:postId" element={<PostViewPage />} />
				<Route path="post/write" element={<PostWritePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
