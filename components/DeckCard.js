import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { lightGray } from '../utils/colors'

export default DeckCard = (props) => {
  return (
    <View style={styles.deckCard}>
      <TouchableOpacity style={styles.clickableCard} onPress={() => console.log(props.name)}>
        <Text>{props.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  deckCard: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  clickableCard: {
    width: '80%',
    margin: '5% 10%',
    padding: '10%',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: lightGray,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  }
})