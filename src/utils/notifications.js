import { AsyncStorage } from 'react-native'

import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'MobileFlashcards:notifications'

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if(data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if(status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()

            // Set a reminder for 8:30 in the morning.
            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(8)
            tomorrow.setMinutes(30)

            Notifications.scheduleLocalNotificationAsync(
              createNotification(), {
                time: tomorrow,
                repeat: 'day'
              })

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
      }
    })
}

function createNotification () {
  return {
    title: 'Flashcard Playtime',
    body: "👋 don't forget to study your flashcards today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}
