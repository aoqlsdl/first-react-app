import styled from "styled-components";

export const ItemWrapper = styled.div`
	width: calc(100% - 2rem);
	padding: 1rem;
	display: flex;
	align-items: center;
	border: 1px solid grey;
	border-radius: 8px;
	cursor: pointer;
	background: white;
	:hover {
		background: lightgrey;
	}
`;

export const TitleText = styled.p`
	font-size: 1.5rem;
	font-weight: 500;
`;

export const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	& > * {
		:not(:last-child) {
			mawrgin-bottom: 1rem;
		}
	}
`;
