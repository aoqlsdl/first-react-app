import * as s from "./styles.js";

const Button = (props) => {
	const { title, onClick } = props;
	return <s.sytledButton onClick={onClick}>{title || "button"}</s.sytledButton>;
};

export default Button;
