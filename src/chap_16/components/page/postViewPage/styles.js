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

export const PostContainer = styled.div`
	padding: 0.5rem 1rem;
	border: 1px solid grey;
	border-radius: 8px;
`;

export const TitleText = styled.p`
	font-size: 1.75rem;
	line-height: 2rem;
	white-space: pre-wrap;
`;

export const ContentText = styled.p`
	font-size: 1.25rem;
	line-height: 2rem;
	white-space: pre-wrap;
`;

export const CommentLabel = styled.p`
	font-size: 1rem;
	font-weight: 500;
`;
