import React from 'react'
import PropTypes from 'prop-types'

import { View, Text, TouchableOpacity } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './styles'

export default DeckItemView = ({deck, navigation}) => (
  <TouchableOpacity key={deck.title} onPress={() => navigation.navigate('DeckView',  { title: deck.title })}>
    <View style={styles.container}>
      <MaterialCommunityIcons style={styles.icon} name="cards-outline" />
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

DeckItemView.propTypes = {
  deck: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}
