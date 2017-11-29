import React from 'react'

import { StyleSheet } from 'react-native'

import { White, Green, Red, Blue, GREY } from 'react-native-material-color'

export default StyleSheet.create({
  container: {
    margin: 8,
    padding: 16,
    backgroundColor: White
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  score: {
    color: GREY[900],
    fontSize: 16
  },
  count: {
    color: GREY[900],
    fontSize: 16
  },
  card: {
    paddingTop: 32,
    paddingBottom: 32,
    color: GREY[900],
    fontSize: 24
  },
  show: {
    paddingBottom: 48,
    textAlign: 'center',
    color: GREY[600],
    fontSize: 26
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
  },
  correct: {
    backgroundColor: Green,
    color: White,
    fontSize: 28
  },
  incorrect: {
    backgroundColor: Red,
    color: White,
    fontSize: 28
  }
})
