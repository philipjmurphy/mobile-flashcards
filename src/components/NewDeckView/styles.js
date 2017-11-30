import React from 'react'

import { StyleSheet } from 'react-native'

import { PrimaryColor, White, Text2, Title } from '../../styles'

export default StyleSheet.create({
  card: {
    margin: 8,
    padding: 16,
    backgroundColor: White
  },
  title: {
    color: Text2,
    ...Title
  },
  field: {
    height: 60,
    marginBottom: 16,
    paddingBottom: 8,
    ...Title
  },
  submitButton: {
    alignSelf: 'flex-end',
    color: PrimaryColor,
    ...Title
  }
})