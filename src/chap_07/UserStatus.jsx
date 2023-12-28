import { useEffect } from 'react';
import useUserStatus from './useUserStatus';

const UserStatus = props => {
	/*
    이 부분을 custom hook으로 추출함.
    const [isOnline, setIsOnline] = useState(null);

	const handleStatusChange = status => {
		setIsOnline(status.isOnline);
	};

	useEffect(() => {
		ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
		return () => {
			ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
		};
	});

	if (isOnline === null) {
		return '로딩중...';
	}
    */

	const isOnline = useUserStatus(props.user.id);

	if (isOnline === null) {
		return '로딩중...';
	}

	return isOnline ? '온라인' : '오프라인';
};

export default UserStatus;
