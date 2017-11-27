import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View, FlatList, Text, StyleSheet } from 'react-native'

import _ from 'lodash'

import { GREY } from 'react-native-material-color'

import DeckItemView from './DeckItemView'

const propTypes = {
  decks: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
}

const DeckListView = ({decks, navigation}) => (
  !decks && <View style={styles.emptyState}><Text style={styles.emptyStateText}>No Decks</Text></View>

  || <FlatList
    ItemSeparatorComponent={RenderSeparator}
    style={styles.container}
    data={decks}
    keyExtractor={item => item.title}
    renderItem={({item}) => <DeckItemView deck={item} navigation={navigation} />} />
)

const RenderSeparator = () => (
  <View style={{ height: 1, backgroundColor: GREY[100], marginLeft: 16, marginRight: 16}} />
)

DeckListView.propTypes = propTypes

const styles = StyleSheet.create({
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
  }
})

const mapStateToProps = ({decks}) => ({
  decks: _.map(decks.byId)
})

export default connect(mapStateToProps)(DeckListView)
