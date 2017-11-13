import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { asyncReceiveDecks } from '../actions/decks'

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
        <Text>DeckList</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckForm')}>
          <Text>{JSON.stringify(this.props.deckList)}</Text>
        </TouchableOpacity>
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
    getDecks: () => dispatch(asyncReceiveDecks())
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