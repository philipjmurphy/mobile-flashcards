import React from 'react'
import { View, StatusBar } from 'react-native'

import styles from './styles'

export default AppStatusBar = () => (
  <View style={styles.statusbar}>
    <StatusBar translucent barStyle="light-content" />
  </View>
)
