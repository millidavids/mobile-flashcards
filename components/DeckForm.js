import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class DeckForm extends Component {
  static navigationOptions = () => {
    return {
      title: 'Deck Form'
    }
  }
  render = () => {
    return (
      <View>
        <Text>DeckForm</Text>
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

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckForm)