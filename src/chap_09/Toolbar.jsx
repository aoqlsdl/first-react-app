import * as s from "./Toolbar.styles";

const Toolbar = (props) => {
	const { isLoggedIn, onClickLogin, onClickLogout } = props;

	return (
		<s.wrapper>
			{isLoggedIn && <s.greeting>환영합니다!</s.greeting>}

			{isLoggedIn ? (
				<button onClick={onClickLogout}>로그아웃</button>
			) : (
				<button onClick={onClickLogin}>로그인</button>
			)}
		</s.wrapper>
	);
};

export default Toolbar;
