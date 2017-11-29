import React from 'react'

import { StyleSheet } from 'react-native'

import { Blue, White, Amber, GREY } from 'react-native-material-color'

export default StyleSheet.create({
  container: {
    margin: 8,
    padding: 16,
    backgroundColor: White
  },
  scored: {
    padding: 16,
    textAlign: 'center',
    color: GREY[900],
    fontSize: 32
  },
  trophy: {
    padding: 16,
    textAlign: 'center',
    fontSize: 64,
    color: Amber
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
    color: Blue,
    fontSize: 22
  }
})
