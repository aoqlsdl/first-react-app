import { useEffect } from 'react';

const Counter = props => {
	const [count, setCount] = useState(0);

	/* useEffect
    컴포넌트가 마운트 된 이후, 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨.
    의존성 배열에 빈 배열을 넣으면 마운트와 언마운트 시에만 실행됨.
    의존성 배열을 생략하면 컴포넌트가 리렌더링 될 때마다 실행됨.
    */

	// componentDidMount, componentDidUpdate와 비슷하게 작동
	useEffect(() => {
		// 브라우저 API를 이용하여 document title 업데이트
		document.title = `업데이트 횟수: ${count}`;
	});

	return (
		<div>
			<p>총 {count}번 클릭했습니다.</p>
			<button onClick={() => setCount(count + 1)}>클릭</button>
		</div>
	);
};

export default Counter;
