import React from 'react'

import { StyleSheet } from 'react-native'

import { PrimaryColor, White, Display2, Headline, Subheading, Text1, Text2 } from '../../styles'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingRight: 24,
    paddingBottom: 20,
    paddingLeft: 16,
    backgroundColor: White
  },
  titleCards: {
    marginLeft: 16,
    marginRight: 16,
    alignContent: 'center'
  },
  title: {
    color: Text1,
    ...Headline
  },
  cards: {
    color: Text2,
    ...Subheading
  },
  icon: {
    color: PrimaryColor,
    ...Display2
  }
})
