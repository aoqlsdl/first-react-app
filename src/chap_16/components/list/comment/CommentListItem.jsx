import * as s from "./styles";

const CommentListItem = (props) => {
	const { comment } = props;

	return (
		<>
			<s.ItemWrapper>
				<s.ContentText>{comment.content}</s.ContentText>
			</s.ItemWrapper>
		</>
	);
};

export default CommentListItem;
