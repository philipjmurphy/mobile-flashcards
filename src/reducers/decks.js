import * as ActionTypes from '../actions/types'

const INITIAL_STATE = {
  byId: {
    React: {
      title: 'React',
      questions: [{
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      }, {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]},
    JavaScript: {
      title: 'JavaScript',
      questions: [{
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }]
    }
  }
}

export default function decks(state=INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_DECK: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.title]: {
            title: action.title,
            questions: []
          }
        }
      }
    }
    case ActionTypes.ADD_NEW_CARD: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.title]: {
            ...state.byId[action.title],
            questions: [
              ...state.byId[action.title].questions,
              {
                question: action.question,
                answer: action.answer
              }
            ]
          }
        }
      }
    }
    default: {
      return state;
    }
  }
}
