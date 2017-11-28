import React from 'react'

import { StyleSheet } from 'react-native'

import { Blue, White, GREY } from 'react-native-material-color'

export default StyleSheet.create({
  container: {
    margin: 8,
    padding: 16,
    backgroundColor: White
  },
  detail: {
    padding: 16
  },
  title: {
    color: GREY[900],
    fontSize: 32
  },
  cards: {
    color: GREY[600],
    fontSize: 20
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  addCard: {
    padding: 16,
    color: Blue,
    fontSize: 20
  },
  startQuiz: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: Blue,
    color: White,
    fontSize: 20
  }
})