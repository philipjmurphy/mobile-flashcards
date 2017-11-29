import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Platform, View, Text, TouchableOpacity, Animated } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { clearLocalNotification, setLocalNotification } from '../../utils/notifications'

import styles from './styles'

class QuizComplete extends Component {
  state = {
    bounceValue: new Animated.Value(1)
  }

  componentWillMount() {
    const { bounceValue } = this.state

    setTimeout(function() {
      Animated.sequence([
        Animated.timing(bounceValue, { duration: 200, toValue: 2.04 }),
        Animated.spring(bounceValue, { toValue: 1, friction: 4 })
      ]).start()
    })

    // Clear notification reminder as have completed quiz for today.
    clearLocalNotification()
    // Set a new reminder notification for tomorrow.
    setLocalNotification()
  }

  render = () => {
    const { score, deck, navigation, resetQuiz } = this.props
    const { bounceValue } = this.state

    return (
      <View style={styles.container}>
        <Animated.View style={[{transform: [{scale: bounceValue}]}]}>
          <Ionicons style={styles.trophy} name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'} size={36} />
        </Animated.View>
        <Text style={styles.scored}>You Scored: {Math.round((score / deck.questions.length) * 100)}%</Text>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={resetQuiz}>
            <Text style={styles.button}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.button}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

QuizComplete.propTypes = {
  score: PropTypes.number.isRequired,
  deck: PropTypes.object.isRequired,
  resetQuiz: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

export default QuizComplete