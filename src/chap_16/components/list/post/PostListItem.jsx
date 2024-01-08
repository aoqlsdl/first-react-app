import * as s from "./styles";

const PostListItem = (props) => {
	const { post, onClick } = props;
	return (
		<>
			<s.ItemWrapper onClick={onClick}>
				<s.TitleText>{post.title}</s.TitleText>
			</s.ItemWrapper>
		</>
	);
};

export default PostListItem;
