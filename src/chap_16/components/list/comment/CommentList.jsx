import CommentListItem from "./CommentListItem";
import * as s from "./styles";

const CommentList = (props) => {
	const { comments } = props;

	return (
		<>
			<s.ListWrapper>
				{comments.map((comment, i) => {
					return <CommentListItem key={comment.id} comment={comment} />;
				})}
			</s.ListWrapper>
		</>
	);
};

export default CommentList;
