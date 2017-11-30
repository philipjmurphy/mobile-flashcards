import React from 'react'
import { Platform } from 'react-native'
import { StackNavigator, NavigationActions } from 'react-navigation'

import { Ionicons } from '@expo/vector-icons'

import DeckListView from '../DeckListView'
import DeckView from '../DeckView'
import QuizView from '../QuizView'
import NewDeckView from '../NewDeckView'
import NewCardView from '../NewCardView'

import styles, { defaultHeaderStyles } from './styles'

export default Stack = StackNavigator({
  Home: {
    screen: DeckListView,
    navigationOptions: ({navigation}) => ({
      title: 'Decks',
      headerRight: (
        <Ionicons style={styles.addButton} name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
                  onPress={() => navigation.navigate('NewDeckView')} />
      ),
      headerStyle: styles.header
    })
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`
    })
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title} Quiz`
    })
  },
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: () => ({
      title: 'New Deck'
    })
  },
  NewCardView: {
    screen: NewCardView,
    navigationOptions: () => ({
      title: 'New Question'
    })
  }
}, {
  navigationOptions: ({navigation}) => (defaultHeaderStyles)
})

// Prevent duplicate navigation events.
const navigateOnce = (getStateForAction) => (action, state) => {
  const {type, routeName} = action

  return (
    state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
  ) ? state : getStateForAction(action, state)
}

Stack.router.getStateForAction = navigateOnce(Stack.router.getStateForAction);