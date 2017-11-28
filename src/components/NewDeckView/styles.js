import React from 'react'

import { StyleSheet } from 'react-native'

import { Blue, White, GREY } from 'react-native-material-color'

export default StyleSheet.create({
  card: {
    margin: 8,
    padding: 16,
    backgroundColor: White
  },
  title: {
    fontSize: 20,
    color: GREY[900]
  },
  field: {
    height: 60,
    marginBottom: 16,
    paddingBottom: 8,
    fontSize: 20
  },
  submitButton: {
    alignSelf: 'flex-end',
    color: Blue,
    fontSize: 20
  }
})