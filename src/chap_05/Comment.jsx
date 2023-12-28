import * as s from './Comment.styles';

const Comment = props => {
	return (
		<s.wrapper>
			<s.imgContainer>
				<s.img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
			</s.imgContainer>
			<s.contentContainer>
				<s.nameTxt>{props.name}</s.nameTxt>
				<s.commentTxt>{props.comment}</s.commentTxt>
			</s.contentContainer>
		</s.wrapper>
	);
};

export default Comment;
