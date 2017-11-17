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
    case DeckActions.ADD_DECK:
      return {
        ...state,
        deckList: {
          ...state.deckList,
          [action.key]: action.deck
        }
      }
    default:
      return state
  }
}