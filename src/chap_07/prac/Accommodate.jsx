import { useEffect, useState } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

const Accomodate = props => {
	const [isFull, setIsFull] = useState(false);
	const [count, increase, decrease] = useCounter(0);

	useEffect(() => {
		console.log('======================');
		console.log('useEffect() is called.');
		console.log(`isfull: ${isFull}`);
	}, [count]);

	useEffect(() => {
		setIsFull(count >= MAX_CAPACITY);
		console.log(`Current const value: ${count}`);
	}, [count]);

	return (
		<div style={{ padding: 16 }}>
			<p>{`총 ${count}명 수용했습니다.`}</p>
			<button onClick={increase}>입장</button>
			<button onClick={decrease}>퇴장</button>

			{isFull && <p style={{ color: 'red' }}>수용인원이 초과되었습니다.</p>}
		</div>
	);
};

export default Accomodate;
