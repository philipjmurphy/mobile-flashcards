import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'

import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './src/store'

import { setLocalNotification } from './src/utils/notifications'

import { Blue } from 'react-native-material-color'

import Loader from './src/components/Loader'
import AppStatusBar from './src/components/AppStatusBar'
import Stack from './src/components/Stack'

const { persistor, store } = configureStore()

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render = () => (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loader />}>
        <View style={{flex: 1}}>
          <AppStatusBar backgroundColor={Blue} barStyle="light-content" />
          <Stack />
        </View>
      </PersistGate>
    </Provider>
  )
}
