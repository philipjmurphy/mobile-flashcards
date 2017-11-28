import React from 'react'

import { StyleSheet } from 'react-native'

import { Constants } from 'expo'

import { Blue } from 'react-native-material-color'

export default StyleSheet.create({
  statusbar: {
    backgroundColor: Blue,
    height: Constants.statusBarHeight
  }
})
