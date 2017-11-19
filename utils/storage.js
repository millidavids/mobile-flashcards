import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'mobile-flashcards:decks'

export const storageGetDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export const storageStoreDeck = (key, deck) => {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}

export const storageClearDecks = () => {
  return new Promise(async (resolve, reject) => {
    AsyncStorage.removeItem(DECK_STORAGE_KEY)
    const clearedDecks = await AsyncStorage.getItem(DECK_STORAGE_KEY)
    clearedDecks ? reject(clearedDecks) : resolve({})
  })
}