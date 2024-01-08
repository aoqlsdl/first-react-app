import PostListItem from "./PostListItem";
import * as s from "./styles";

const PostList = (props) => {
	const { posts, onClickItem } = props;
	return (
		<>
			<s.ListWrapper>
				{posts.map((post, i) => {
					return (
						<PostListItem
							key={post.id}
							post={post}
							onClick={() => onClickItem(post)}
						/>
					);
				})}
			</s.ListWrapper>
		</>
	);
};

export default PostList;
