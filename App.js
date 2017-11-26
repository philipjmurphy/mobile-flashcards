import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ActivityIndicator, Platform, StyleSheet, View, StatusBar } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation'
import { Constants } from 'expo'

import { Ionicons } from '@expo/vector-icons'

import { Blue, White } from 'react-native-material-color'

import DeckListView from './components/DeckListView'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'
import NewDeckView from './components/NewDeckView'
import NewCardView from './components/NewCardView'

import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './store'

import { setLocalNotification } from './utils/notifications'

const { persistor, store } = configureStore()

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render = () => (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loader />}>
        <View style={{flex: 1}}>
          <AppStatusBar backgroundColor={Blue} barStyle="light-content" />
          <Stack />
        </View>
      </PersistGate>
    </Provider>
  )
}

const Loader = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ActivityIndicator size='large' />
  </View>
)

const AppStatusBar = ({backgroundColor, ...props}) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

const Stack = StackNavigator({
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