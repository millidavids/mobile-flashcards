import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { asyncReceiveDecks, asyncClearDecks } from '../actions/decks'
import DeckCard, { styles as deckCardStyles } from './DeckCard'

class DeckList extends Component {
  static navigationOptions = () => {
    return {
      title: 'Deck List'
    }
  }
  render = () => {
    console.log(this.props.deckMap)
    const deckCards = Object.keys(this.props.deckMap).map(key => {
      const deck = this.props.deckMap[key]
      return <DeckCard key={deck.cardsId} cardId={deck.cardsId} name={deck.name}/>
    })
    return (
      <View style={styles.container}>
        {deckCards}
        <TouchableOpacity 
          style={deckCardStyles.clickableCard} 
          onPress={() => this.props.navigation.navigate('DeckForm')}
        >
          <Text>Create Deck</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={deckCardStyles.clickableCard} 
          onPress={() => this.props.clearDecks()}
        >
          <Text>Clear Decks</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})

const mapStateToProps = (state) => {
  return {
    deckMap: state.decks.deckMap
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDecks: () => dispatch(asyncReceiveDecks()),
    clearDecks: () => dispatch(asyncClearDecks())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList)