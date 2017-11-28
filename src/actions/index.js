import * as ActionTypes from '../actions/types'

// NEW DECK
///////////
export const addNewDeck = (title) => {
  return {
    type: ActionTypes.ADD_NEW_DECK,
    title
  }
}

// NEW CARD
///////////
export const addNewCard = (title, question, answer) => {
  return {
    type: ActionTypes.ADD_NEW_CARD,
    title,
    question,
    answer
  }
}
