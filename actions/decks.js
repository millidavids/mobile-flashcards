import uuidv4 from 'uuid/v4'
import { getDecks, storeDeck } from '../utils/storage'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

const addDeck = (key, deck) => {
  return {
    type: ADD_DECK,
    key,
    deck
  }
}

export const asyncReceiveDecks = () => dispatch => {
  getDecks()
    .then(response => JSON.parse(response))
    .then(decks => dispatch(receiveDecks(decks)))
}

export const asyncAddDeck = (name) => dispatch => {
  const key = uuidv4()
  const deck = {name, cardsId: uuidv4()}
  storeDeck(key, deck)
  dispatch(addDeck(key, deck))
}