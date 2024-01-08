import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 1rem;
	width: calc(100% - 2rem);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Container = styled.div`
	width: 100%;
	max-width: 720px;

	& > * {
		:not(:last-child) {
			margin-bottom: 1rem;
		}
	}
`;
