import React from 'react'

import { StyleSheet } from 'react-native'

import { PrimaryColor, White, Green, Red, Text1, Text2, Headline, Subheading, Title } from '../../styles'

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
    color: Text1,
    ...Subheading
  },
  count: {
    color: Text1,
    ...Subheading
  },
  card: {
    paddingTop: 32,
    paddingBottom: 32,
    color: Text1,
    ...Headline
  },
  show: {
    paddingBottom: 48,
    textAlign: 'center',
    color: Text2,
    ...Headline
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
  },
  correct: {
    backgroundColor: Green,
    color: White,
    ...Headline
  },
  incorrect: {
    backgroundColor: Red,
    color: White,
    ...Headline
  }
})
