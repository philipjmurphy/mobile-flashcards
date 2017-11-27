import { createStore, compose } from 'redux'
import { reducer as reduxReducer } from 'redux-form'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from '../reducers'

export default configureStore = () => {
  const store = createStore(
    persistCombineReducers({
        key: 'decks',
        storage: AsyncStorage
        // debug: true
      }, reducers),
    undefined,
    compose(composeWithDevTools())
  )

  return { store, persistor: persistStore(store) }
}
