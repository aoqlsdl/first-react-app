import Comment from './Comment';
import { comments } from './comments';

const CommentList = props => {
	return (
		<>
			<div>
				{comments.map(c => {
					return <Comment name={c.name} comment={c.comment} />;
				})}
			</div>
		</>
	);
};

export default CommentList;
