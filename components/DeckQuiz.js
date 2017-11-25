import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class DeckQuiz extends Component {
  static navigationOptions = () => {
    return {
      title: 'DeckQuiz'
    }
  }
  render = () => {
    return (
      <View style={styles.deckQuiz}>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Deck: state.decks.Deck
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDecks: () => dispatch(asyncReceiveDecks()),
    clearDecks: () => dispatch(asyncClearDecks())
  }
}

const styles = StyleSheet.create({
  deckQuiz: {
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckQuiz)