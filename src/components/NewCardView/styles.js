import React from 'react'

import { StyleSheet } from 'react-native'

import { PrimaryColor, White, Text1, Title } from '../../styles'

export default StyleSheet.create({
  card: {
    margin: 8,
    padding: 16,
    backgroundColor: White
  },
  field: {
    height: 60,
    marginBottom: 16,
    paddingBottom: 8,
    color: Text1,
    ...Title
  },
  submitButton: {
    alignSelf: 'flex-end',
    marginBottom: 16,
    color: PrimaryColor,
    ...Title
  }
})