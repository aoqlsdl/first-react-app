import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as s from "./styles";
import TextInput from "../../ui/textInput";
import Button from "../../ui/button";

const PostWritePage = (props) => {
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	return (
		<>
			<s.Wrapper>
				<s.Container>
					<TextInput
						height={20}
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
					<TextInput
						height={400}
						value={content}
						onChange={(e) => {
							setContent(e.target.value);
						}}
					/>
					<Button
						title="글 작성하기"
						onClick={() => {
							navigate("/");
						}}
					/>
				</s.Container>
			</s.Wrapper>
		</>
	);
};

export default PostWritePage;
