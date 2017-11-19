import uuidv4 from 'uuid/v4'
import { storageGetDecks, storageStoreDeck, storageClearDecks } from '../utils/storage'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const CLEAR_DECKS = 'CLEAR_DECKS'

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

export const asyncClearDecks = () => dispatch => {
  storageClearDecks()
    .then(response => dispatch(receiveDecks(response)))
}

export const asyncReceiveDecks = () => dispatch => {
  storageGetDecks()
    .then(response => JSON.parse(response))
    .then(decks => dispatch(receiveDecks(decks)))
}

export const asyncAddDeck = (name) => dispatch => {
  const key = uuidv4()
  const deck = {name, cardsId: uuidv4()}
  storageStoreDeck(key, deck)
  dispatch(addDeck(key, deck))
}