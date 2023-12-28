import { useState } from 'react';

const useCounter = initVal => {
	const [count, setCount] = useState(initVal);

	const increase = () => setCount(count => count + 1);
	const decrease = () => setCount(count => count - 1);

	return [count, increase, decrease];
};

export default useCounter;
