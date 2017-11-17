import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { asyncAddDeck } from '../actions/decks'

const styles = StyleSheet.create({
  deckForm: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputLabel: {
    fontSize: 20
  },
  inputField: {
    height: 40,
    width: '100%',
    textAlign: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})

class DeckForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deckNameField: ''
    }
  }
  static navigationOptions = () => {
    return {
      title: 'Deck Form'
    }
  }
  handleSubmitEditing = (name) => {
    this.props.addDeck(name)
    this.props.navigation.goBack()
  }
  render = () => {
    return (
      <View style={styles.deckForm}>
        <Text style={styles.inputLabel}>Deck Name</Text>
        <TextInput 
          style={styles.inputField}
          onChangeText={(deckNameField) => this.setState({deckNameField})}
          onSubmitEditing={(event) => this.handleSubmitEditing(event.nativeEvent.text)}
          value={this.state.deckNameField}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (name) => dispatch(asyncAddDeck(name)) 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckForm)