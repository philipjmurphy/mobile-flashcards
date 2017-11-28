import React from 'react'

import { StyleSheet } from 'react-native'

import { GREY } from 'react-native-material-color'

export default StyleSheet.create({
  container: {
    backgroundColor: GREY[100]
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyStateText: {
    color: GREY[600],
    fontSize: 20
  },
  separator: {
    height: 1,
    backgroundColor: GREY[100],
    marginLeft: 16,
    marginRight: 16
  }
})