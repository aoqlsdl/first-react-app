import { useRef } from 'react';

const TextInputWithFocusBtn = () => {
	const inputElem = useRef(null);

	const onButtonClick = () => {
		// `current`는 text input 엘리먼트를 가리캄;
		inputElem.current.focus();
	};

	return (
		<>
			<input ref={inputElem} type="text" />
			<button onClick={onButtonClick}>텍스트 입력란으로 이동</button>
		</>
	);
};

export default TextInputWithFocusBtn;
