const Clock = props => {
	return (
		<>
			<h1>리액트 시계 만들기</h1>
			<h2>현재 시간은 {new Date().toLocaleTimeString()}입니다.</h2>
		</>
	);
};

export default Clock;
