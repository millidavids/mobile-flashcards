import * as DeckActions from '../actions/decks'

const defaultDecks = {
  deckMap: {}
}

export const decks = (state = defaultDecks, action) => {
  switch (action.type) {
    case DeckActions.RECEIVE_DECKS:
      return {
        ...state,
        deckMap: action.decks || {}
      }
    case DeckActions.ADD_DECK:
      return {
        ...state,
        deckMap: {
          ...state.deckMap,
          [action.key]: action.deck
        }
      }
    default:
      return state
  }
}