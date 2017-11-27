import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { StackNavigator, NavigationActions } from 'react-navigation'
import { Constants } from 'expo'

import { Ionicons } from '@expo/vector-icons'

import { Blue, White } from 'react-native-material-color'

import DeckListView from './components/DeckListView'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'
import NewDeckView from './components/NewDeckView'
import NewCardView from './components/NewCardView'

export default Stack = StackNavigator({
  Home: {
    screen: DeckListView,
    navigationOptions: ({navigation}) => ({
      title: 'Decks',
      headerRight: (
        <View style={{marginRight: 16}}>
          <Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
                    size={36}
                    color={White}
                    onPress={() => navigation.navigate('NewDeckView')} />
        </View>
      ),
      headerStyle: {
        paddingTop: Constants.statusBarHeight,
        height: 60 + Constants.statusBarHeight,
        backgroundColor: Blue
      }
    }),
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
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: Blue
    },
    headerTitleStyle: {
      color: White,
      fontSize: 24
    },
    headerTintColor: White
  })
})

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: Blue,
    color: White
  }
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