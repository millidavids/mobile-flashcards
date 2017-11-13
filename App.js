import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { StackNavigator } from 'react-navigation'
import { gray, white } from './utils/colors'
import DeckList from './components/DeckList'
import DeckForm from './components/DeckForm'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './reducers'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(logger)
  )
)

const Stack = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: gray,
        padding: 0
      }
    }
  },
  DeckForm: {
    screen: DeckForm,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: gray,
        padding: 0
      }
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle='light-content'/>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
