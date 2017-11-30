import React from 'react'

import { StyleSheet } from 'react-native'

import { PrimaryColor, White, Amber, Text1, Display1, Display3, Title } from '../../styles'

export default StyleSheet.create({
  container: {
    margin: 8,
    padding: 16,
    backgroundColor: White
  },
  scored: {
    padding: 16,
    textAlign: 'center',
    color: Text1,
    ...Display1
  },
  trophy: {
    padding: 16,
    textAlign: 'center',
    color: Amber,
    ...Display3
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 16
  },
  button: {
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    borderRadius: 4,
    color: PrimaryColor,
    ...Title
  }
})
