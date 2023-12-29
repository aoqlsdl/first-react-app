import React from "react";

class ConfirmBtn extends React.Component {
	constructor(props) {
		super(props);

		// 확인 여부 저장
		this.state = {
			isConfirmed: false,
		};

		this.handleConfirm = this.handleConfirm.bind(this);
	}

	// 이벤트 핸들러
	handleConfirm() {
		this.setState((prevState) => ({
			isConfirmed: !prevState.isConfirmed,
		}));
	}
	render() {
		return (
			<button onClick={this.handleConfirm}>
				{this.state.isConfirmed}
				{this.state.isConfirmed ? "확인됨" : "확인 안 함"}
			</button>
		);
	}
}

export default ConfirmBtn;
