import { useNavigate } from "react-router-dom";
import * as s from "./styles";
import PostList from "../../list/post/PostList";
import Button from "../../ui/button";
import data from "../../../data.json";

const MainPage = (props) => {
	const {} = props;

	const navigate = useNavigate();

	return (
		<>
			<s.Wrapper>
				<s.Container>
					<Button
						title="글 작성하기"
						onClick={() => {
							navigate("/post/write");
						}}
					/>

					<PostList
						posts={data}
						onClickItem={(item) => {
							navigate(`/post/${item.id}`);
						}}
					/>
				</s.Container>
			</s.Wrapper>
		</>
	);
};

export default MainPage;
