import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

const DeckView = ({ deck, navigation }) => (
  <View style={styles.container}>
    <View style={styles.detail}>
      <Text style={styles.title}>
        {deck.title}
      </Text>
      <Text style={styles.cards}>
        {deck.questions.length} {deck.questions.length === 1 ? 'Card' : 'Cards'}
      </Text>
    </View>
    <View style={styles.buttons}>
      <TouchableOpacity onPress={() => navigation.navigate('NewCardView',  { title: deck.title })}>
        <Text style={styles.addCard}>New Question</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('QuizView',  { title: deck.title })} disabled={deck.questions.length === 0}>
        <Text style={[styles.startQuiz, {opacity: (deck.questions.length === 0 ? 0.5 : 1)}]}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  </View>
)

DeckView.propTypes = {
  deck: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = ({decks}, { navigation }) => ({
  deck: decks.byId[navigation.state.params.title]
})

export default connect(mapStateToProps)(DeckView)