import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Platform, View, StyleSheet, Text, Button, TouchableOpacity, Animated, Audio } from 'react-native'

import { White, Green, Red, Amber, Blue, GREY } from 'react-native-material-color'

import { Ionicons } from '@expo/vector-icons'

class QuizView extends Component {
  state = {
    index: 0,
    showFront: true,
    score: 0,
    bounceValue: new Animated.Value(1)
  }

  componentDidMount() {
    this.loadSound('page-flip', 'https://s3-eu-west-1.amazonaws.com/udacity-mobile-flashcards/sounds/page-flip-01a.mp3') // Attrib: // https://www.soundjay.com/misc/page-flip-01a.mp3
    this.loadSound('sentnc10', 'https://s3-eu-west-1.amazonaws.com/udacity-mobile-flashcards/sounds/sentnc10.wav') // Attrib: http://www.filmsound.org/starwars/sentnc10.wav
    this.loadSound('wookie1', 'https://s3-eu-west-1.amazonaws.com/udacity-mobile-flashcards/sounds/wookie1.wav') // Attrib: http://www.filmsound.org/starwars/wookie1.wav
  }

  loadSound = async (name, soundUri) => {
    let soundObject = new Expo.Audio.Sound()
    this.setState({[name]: soundObject})
    try {
      await soundObject.loadAsync({
        uri: soundUri
      });
    } catch (error) {
      console.log('ERROR: ' + error)
    }
  }

  playSound = async (name) => {
    try {
      var soundObject = this.state[name]
      soundObject.setPositionAsync(0)
      soundObject.playAsync()
    } catch (error) {
      console.log('ERROR: ' + error)
    }
  }

  render() {
    const {deck, navigation} = this.props
    const { bounceValue } = this.state

    if(this.state.index === deck.questions.length) { // Finished Quiz
      setTimeout(function() {
        Animated.sequence([
          Animated.timing(bounceValue, { duration: 200, toValue: 2.04}),
          Animated.spring(bounceValue, { toValue: 1, friction: 4})
        ]).start()
      })

      return (
        <View style={styles.container}>
          <Animated.View style={[this.props.style, {transform: [{scale: bounceValue}]}]}>
            <Ionicons style={styles.trophy} name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'} size={36} color={Amber} />
          </Animated.View>
          <Text style={styles.scored}>You Scored: {Math.round((this.state.score / deck.questions.length) * 100)}%</Text>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => this.setState({index: 0, score: 0, showFront: true})}>
              <Text style={styles.button}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.button}>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.score}>{`Score ${this.state.score}`}</Text>
          <Text style={styles.count}>{`${this.state.index + 1} of ${deck.questions.length}`}</Text>
        </View>

        {this.state.showFront && // Show Front
          <Text style={styles.card}>{deck.questions[this.state.index].question}</Text>}

        {!this.state.showFront && // Show Back
          <Text style={styles.card}>{deck.questions[this.state.index].answer}</Text>}

        <TouchableOpacity onPress={() => {
            this.playSound('page-flip')
            this.setState({showFront: !this.state.showFront})
          }}>

          {this.state.showFront && // Show Front
            <Text style={styles.show}>Show Answer</Text>
          }

          {!this.state.showFront && // Show Back
            <Text style={styles.show}>Show Question</Text>
          }
        </TouchableOpacity>

        <View style={styles.buttons}>
          <TouchableOpacity // CORRECT button
            onPress={() => {
              this.playSound('sentnc10')
              this.setState({score: this.state.score + 1, index: this.state.index + 1, showFront: true})
            }}>
            <Text style={[styles.button, styles.correct]}>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity disabled={deck.questions.length === 0} // INCORRECT button
            onPress={() => {
              this.playSound('wookie1')
              this.setState({index: this.state.index + 1, showFront: true})
            }}>
            <Text style={[styles.button, styles.incorrect]}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 16,
    backgroundColor: White
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  score: {
    color: GREY[900],
    fontSize: 16
  },
  count: {
    color: GREY[900],
    fontSize: 16
  },
  scored: {
    padding: 16,
    textAlign: 'center',
    color: GREY[900],
    fontSize: 32
  },
  trophy: {
    padding: 16,
    textAlign: 'center',
    fontSize: 64
  },
  card: {
    paddingTop: 32,
    paddingBottom: 32,
    color: GREY[900],
    fontSize: 24
  },
  show: {
    paddingBottom: 48,
    textAlign: 'center',
    color: GREY[600],
    fontSize: 26
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 16
  },
  button: {
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    borderRadius: 4,
    color: Blue,
    fontSize: 22
  },
  correct: {
    backgroundColor: Green,
    color: White,
    fontSize: 28
  },
  incorrect: {
    backgroundColor: Red,
    color: White,
    fontSize: 28
  }
})

const mapStateToProps = ({decks}, {navigation}) => ({
  deck: decks.byId[navigation.state.params.title]
})

export default connect(mapStateToProps)(QuizView)
