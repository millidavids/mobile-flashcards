import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Deck extends Component {
  static navigationOptions = () => {
    return {
      title: 'Deck'
    }
  }
  render = () => {
    return (
      <View style={styles.deck}>
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
  deck: {
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck)