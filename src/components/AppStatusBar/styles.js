import React from 'react'

import { StyleSheet } from 'react-native'

import { Constants } from 'expo'

import { PrimaryColor } from '../../styles'

export default StyleSheet.create({
  statusbar: {
    backgroundColor: PrimaryColor,
    height: Constants.statusBarHeight
  }
})
