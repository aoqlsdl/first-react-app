import { useNavigate, useParams } from "react-router-dom";
import * as s from "./styles";
import { useState } from "react";
import Button from "../../ui/button";
import TextInput from "../../ui/textInput";
import data from "../../../data.json";

const PostViewPage = (props) => {
	const {} = props;
	const navigate = useNavigate();
	const { postId } = useParams();

	const post = data.find((i) => {
		return i.id === Number(postId);
	});

	const [comment, setComment] = useState("");
	return (
		<>
			<s.Wrapper>
				<s.Container>
					<Button
						title="뒤로 가기"
						onClick={() => {
							navigate("/");
						}}
					/>
					<s.PostContainer>
						<s.TitleText>{post.title}</s.TitleText>
						<s.ContentText>{post.content}</s.ContentText>

						<s.CommentLabel>댓글</s.CommentLabel>

						<TextInput
							height={40}
							value={comment}
							onChange={(e) => {
								setComment(e.target.value);
							}}
						/>
						<Button
							title="댓글 작성하기"
							onClick={() => {
								navigate("/");
							}}
						/>
					</s.PostContainer>
				</s.Container>
			</s.Wrapper>
		</>
	);
};

export default PostViewPage;
