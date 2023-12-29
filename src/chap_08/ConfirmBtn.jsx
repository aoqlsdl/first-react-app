import React, { useState } from "react";

const ConfirmBtn = () => {
	const [isConfirmed, setIsConfirmed] = useState(false);

	const handleConfirm = () => {
		setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
	};

	return (
		<div>
			<button onClick={handleConfirm} disabled={isConfirmed}>
				{isConfirmed ? "확인됨" : "확인 안 됨"}
			</button>
		</div>
	);
};

export default ConfirmBtn;
