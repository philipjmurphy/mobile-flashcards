import React, { Component } from 'react'

import { connect } from 'react-redux'

import { View, Text, TouchableOpacity } from 'react-native'

import { loadSound, playSound } from '../../utils/audio'

import styles from './styles'

import QuizComplete from '../QuizComplete'

class QuizView extends Component {
  state = {
    showFront: true,
    index: 0,
    score: 0
  }

  componentDidMount() {
    loadSound('page-flip', 'https://s3-eu-west-1.amazonaws.com/udacity-mobile-flashcards/sounds/page-flip-01a.mp3') // Attrib: // https://www.soundjay.com/misc/page-flip-01a.mp3
    loadSound('sentnc10', 'https://s3-eu-west-1.amazonaws.com/udacity-mobile-flashcards/sounds/sentnc10.wav') // Attrib: http://www.filmsound.org/starwars/sentnc10.wav
    loadSound('wookie1', 'https://s3-eu-west-1.amazonaws.com/udacity-mobile-flashcards/sounds/wookie1.wav') // Attrib: http://www.filmsound.org/starwars/wookie1.wav
  }

  resetQuiz = () => {
    this.setState({score: 0, index: 0, showFront: true})
  }

  render() {
    const {deck, navigation} = this.props
    const {showFront, index, score} = this.state

    if(index === deck.questions.length) { // Finished Quiz
      return <QuizComplete score={score} deck={deck} resetQuiz={this.resetQuiz} navigation={navigation} />
    }

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.score}>{`Score ${score}`}</Text>
          <Text style={styles.count}>{`${index + 1} of ${deck.questions.length}`}</Text>
        </View>

        {showFront && // Show Front
          <Text style={styles.card}>{deck.questions[index].question}</Text>}

        {!showFront && // Show Back
          <Text style={styles.card}>{deck.questions[index].answer}</Text>}

        <TouchableOpacity onPress={() => {
            playSound('page-flip')
            this.setState({showFront: !showFront})
          }}>

          {showFront && <Text style={styles.show}>Show Answer</Text> }

          {!showFront && <Text style={styles.show}>Show Question</Text> }
        </TouchableOpacity>

        <View style={styles.buttons}>
          <TouchableOpacity // CORRECT button
            onPress={() => {
              playSound('sentnc10')
              this.setState({score: score + 1, index: index + 1, showFront: true})
            }}>
            <Text style={[styles.button, styles.correct]}>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity disabled={deck.questions.length === 0} // INCORRECT button
            onPress={() => {
              playSound('wookie1')
              this.setState({index: index + 1, showFront: true})
            }}>
            <Text style={[styles.button, styles.incorrect]}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({decks}, {navigation}) => ({
  deck: decks.byId[navigation.state.params.title]
})

export default connect(mapStateToProps)(QuizView)
