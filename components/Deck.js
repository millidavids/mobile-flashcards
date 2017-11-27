import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Deck extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: navigation.state.params.name
  })
  render = () => {
    return (
      <View style={styles.deck}>
        <Text>{this.props.navigation.state.params.id}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.navigation.state.params.id)
  return {
    // deck: state.decks.deck[ownProps.navigation.state.params.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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