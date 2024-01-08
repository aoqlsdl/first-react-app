import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	background-color: lightgray;
`;

export const Block = styled.div`
	padding = ${(props) => props.padding};
	border: 1px solid black;
	border-radius: 1rem;
	background-color: ${(props) => props.backgroundcolor};
	color: white;
	font-size: 2rem;
	font-weight: bold;
	text-align: center;
`;
