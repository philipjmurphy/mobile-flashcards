import * as DeckActionTypes from './deckActionTypes'

// NEW DECK
///////////
export const addNewDeck = (title) => {
  return {
    type: DeckActionTypes.ADD_NEW_DECK,
    title
  }
}

// NEW CARD
///////////
export const addNewCard = (title, question, answer) => {
  return {
    type: DeckActionTypes.ADD_NEW_CARD,
    title,
    question,
    answer
  }
}
