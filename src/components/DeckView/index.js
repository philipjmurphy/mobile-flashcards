import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import DeckItemView from '../DeckItemView'

import { Blue, White, GREY } from 'react-native-material-color'

const propTypes = {
  deck: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

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

DeckView.propTypes = propTypes

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 16,
    backgroundColor: White
  },
  detail: {
    padding: 16
  },
  title: {
    color: GREY[900],
    fontSize: 32
  },
  cards: {
    color: GREY[600],
    fontSize: 20
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  addCard: {
    padding: 16,
    color: Blue,
    fontSize: 20
  },
  startQuiz: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: Blue,
    color: White,
    fontSize: 20
  }
})

const mapStateToProps = ({decks}, { navigation }) => ({
  deck: decks.byId[navigation.state.params.title]
})

export default connect(mapStateToProps)(DeckView)