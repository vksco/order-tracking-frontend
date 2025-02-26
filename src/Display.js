import React, { useContext, useEffect } from 'react';
import { NotificationContext } from './NotificationContext';

function NotificationDisplay() {
  const { notifications, removeNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        removeNotification(notifications[0].id);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notifications, removeNotification]);

  return (
    <div>
      {notifications.map((notification) => (
        <div key={notification.id}>{notification.message}</div>
      ))}
    </div>
  );
}

export default NotificationDisplay;