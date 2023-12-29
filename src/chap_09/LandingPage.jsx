import { useState } from "react";
import Toolbar from "./Toolbar";

const LandingPage = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const onClickLogin = () => setIsLoggedIn(true);
	const onClickLogout = () => setIsLoggedIn(false);

	return (
		<>
			<Toolbar
				isLoggedIn={isLoggedIn}
				onClickLogin={onClickLogin}
				onClickLogout={onClickLogout}
			/>
			<div style={{ padding: 16 }}>리액트 공부~</div>
		</>
	);
};

export default LandingPage;
