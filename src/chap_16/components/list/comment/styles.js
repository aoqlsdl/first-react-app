import styled from "styled-components";

export const ItemWrapper = styled.div`
	width: calc(100% - 2rem);
	padding: 1rem;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	border: 1px solid grey;
	border-radius: 8px;
	cursor: pointer;
	background: white;
	:hover {
		background: lightgrey;
	}
`;

export const ContentText = styled.p`
	font-size: 0.75rem;
`;

export const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	& > * {
		:not(:last-child) {
			margin-bottom: 1rem;
		}
	}
`;
