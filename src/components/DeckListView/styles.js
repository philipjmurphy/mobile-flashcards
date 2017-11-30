import React from 'react'

import { StyleSheet } from 'react-native'

import { Grey, Text2, Title } from '../../styles'

export default StyleSheet.create({
  container: {
    backgroundColor: Grey[100]
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyStateText: {
    color: Text2,
    ...Title
  },
  separator: {
    height: 1,
    backgroundColor: Grey[100],
    marginLeft: 16,
    marginRight: 16
  }
})