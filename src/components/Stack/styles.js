import React from 'react'

import { StyleSheet } from 'react-native'

import { Constants } from 'expo'

import { PrimaryColor, White, Display1, Headline } from '../../styles'

export default StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
    height: 60 + Constants.statusBarHeight,
    backgroundColor: PrimaryColor
  },
  addButton: {
    padding: 16,
    backgroundColor: PrimaryColor,
    color: White,
    ...Display1
  }
})

export const defaultHeaderStyles = {
  headerStyle: {
    backgroundColor: PrimaryColor
  },
  headerTitleStyle: {
    color: White,
    ...Headline
  },
  headerTintColor: White
}
