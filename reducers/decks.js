import * as DeckActions from '../actions/decks'

const defaultDecks = {
  deckList: {}
}

export const decks = (state = defaultDecks, action) => {
  switch (action.type) {
    case DeckActions.RECEIVE_DECKS:
      return {
        ...state,
        deckList: action.decks
      }
    default:
      return state
  }
}