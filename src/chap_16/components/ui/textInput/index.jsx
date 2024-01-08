import * as s from "./styles";

const TextInput = (props) => {
	const { height, value, onChange } = props;

	return <s.StyledTextarea height={height} value={value} onChange={onChange} />;
};

export default TextInput;
