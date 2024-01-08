import styled from "styled-components";

export const StyledTextarea = styled.textarea`
	width: calc(100% - 2rem);

	${(props) => props.height && `height: ${props.height}px;`}

	padding: 1rem;
	font-size: 1rem;
	line-height: 1.5rem;
`;
