import React from 'react'

import { StyleSheet } from 'react-native'

import { Blue, White, GREY } from 'react-native-material-color'

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
    color: GREY[900],
    fontSize: 24
  },
  cards: {
    color: GREY[600],
    fontSize: 18
  },
  icon: {
    color: Blue
  }
})
