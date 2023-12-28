import { useEffect } from 'react';

// UserStatus 컴포넌트에서 중복되는 로직을 추출하여 커스텀 훅으로 만듦.
const useUserStatus = () => {
	const [isOnline, setIsOnline] = useState(null);

	useEffect(() => {
		const handleStatusChange = status => {
			setIsOnline(status.isOnline);
		};

		ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
		return () => {
			ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
		};
	});

	return isOnline;
};

export default useUserStatus;
