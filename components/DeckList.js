import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { asyncReceiveDecks, asyncClearDecks } from '../actions/decks'

class DeckList extends Component {
  static navigationOptions = () => {
    return {
      title: 'Deck List'
    }
  }
  state = {
    value: {}
  }
  componentWillMount = () => {
    this.props.getDecks()
  }
  render = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckForm')}>
          <Text>Create Deck</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.clearDecks()}>
          <Text>Clear Decks</Text>
        </TouchableOpacity>
        <Text>{JSON.stringify(this.props.deckList)}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deckList: state.decks.deckList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDecks: () => dispatch(asyncReceiveDecks()),
    clearDecks: () => dispatch(asyncClearDecks())
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList)