import React from 'react'

import { StyleSheet } from 'react-native'

import { PrimaryColor } from '../../styles'

import { White, Text1, Text2, Display1, Title } from '../../styles'

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
    color: Text1,
    ...Display1
  },
  cards: {
    color: Text2,
    ...Title
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  addCard: {
    padding: 16,
    color: PrimaryColor,
    ...Title
  },
  startQuiz: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: PrimaryColor,
    color: White,
    ...Title
  }
})