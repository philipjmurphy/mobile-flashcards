import React from 'react'
import PropTypes from 'prop-types'

import { Platform, View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Blue, White, GREY } from 'react-native-material-color'

const propTypes = {
  deck: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

export default DeckItemView = ({deck, navigation}) => (
  <TouchableOpacity key={deck.title} onPress={() => navigation.navigate('DeckView',  { title: deck.title })}>
    <View style={styles.container}>
      <MaterialCommunityIcons name="cards-outline" size={36} color={Blue} />
      <View style={styles.titleCards}>
        <Text style={styles.title}>
          {deck.title}
        </Text>
        <Text style={styles.cards}>
          {deck.questions.length} {deck.questions.length === 1 ? 'Card' : 'Cards'}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
)

DeckItemView.propTypes = propTypes

const styles = StyleSheet.create({
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
  }
})
