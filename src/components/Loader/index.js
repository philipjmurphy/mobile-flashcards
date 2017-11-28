import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import styles from './styles'

export default Loader = () => (
  <View style={styles.indicator}>
    <ActivityIndicator size='large' />
  </View>
)
