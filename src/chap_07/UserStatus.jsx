import { useEffect } from 'react';

const UserStatus = props => {
	const [isOnline, setIsOnline] = useState(null);

	const handleStatusChange = status => {
		setIsOnline(status.isOnline);
	};

	// useEffect를 이용해 컴포넌트가 unmount될 때 함수를 호출
	useEffect(() => {
		ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
		return () => {
			ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
		};
	});

	if (isOnline === null) {
		return '로딩중...';
	}

	return isOnline ? '온라인' : '오프라인';
};

export default UserStatus;
