import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View, FlatList, Text } from 'react-native'

import _ from 'lodash'

import DeckItemView from '../DeckItemView'

import styles from './styles'

const DeckListView = ({decks, navigation}) => (
  !decks && <View style={styles.emptyState}><Text style={styles.emptyStateText}>No Decks</Text></View>

  || <FlatList
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    style={styles.container}
    data={decks}
    keyExtractor={item => item.title}
    renderItem={({item}) => <DeckItemView deck={item} navigation={navigation} />} />
)

DeckListView.propTypes = {
  decks: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = ({decks}) => ({
  decks: _.map(decks.byId)
})

export default connect(mapStateToProps)(DeckListView)
