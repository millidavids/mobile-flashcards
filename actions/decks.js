import { getDecks, storeDeck } from '../utils/storage'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'

const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export const asyncReceiveDecks = () => dispatch => {
  getDecks()
    .then(response => JSON.parse(response))
    .then(decks => dispatch(receiveDecks(decks)))
}