import * as notificationsData from '../../../../notifications.json';
import { schema,normalize } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity(
  'notifications',
  {
    author: user,
    context: message,
  });
const normalized = normalize(notificationData, [notification])

export default function getAllNotificationsByUser(userId) {
   const userNotifications = [];
   const notifications = normalizedData.entities.notifications;
   const messages = normalizedData.entities.messages;
   const users = normalizedData.entities.users;

   for (const notificationId in notifications) {
    const notification = notifications[notificationId];
    if (users[notification.author].id === userId) {
      userNotifications.push(messages[notification.context]);
    }
  }

  return userNotifications;
}
export { normalized };
