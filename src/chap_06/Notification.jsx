import * as s from './Notification.styles';

const Notification = props => {
	return (
		<s.wrapper>
			<s.messageText>{props.message}</s.messageText>
		</s.wrapper>
	);
};

export default Notification;
