import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'mobile-flashcards:decks'

export const getDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export const storeDeck = (key, deck) => {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}