import { useEffect, useState } from 'react';
import { reservedNotifications } from './reservedNotifications';
import Notification from './Notification';

const NotificationList = () => {
	// state 설정
	const [notifications, setNotifications] = useState([]);

	// componentDidMount()를 대신함
	useEffect(() => {
		const timer = setInterval(() => {
			if (notifications.length < reservedNotifications.length) {
				const newNotifications = [
					...notifications,
					reservedNotifications[notifications.length],
				];
				setNotifications(newNotifications);
			} else {
				clearInterval(timer);
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [notifications]);

	return (
		<div>
			{notifications.map(n => {
				return <Notification key={n.id} id={n.id} message={n.message} />;
			})}
		</div>
	);
};

export default NotificationList;
