import * as ActionTypes from '../actions/types'

// NEW DECK
///////////
export const addNewDeck = (title) => ({
  type: ActionTypes.ADD_NEW_DECK,
  title
})

// NEW CARD
///////////
export const addNewCard = (title, question, answer) => ({
  type: ActionTypes.ADD_NEW_CARD,
  title,
  question,
  answer
})
