/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Renderer from './components/Renderer'

const cardJson = {
  type: 'AdaptiveCard',
  version: 1,
  body: [
    {
      type: 'TextBlock',
      text: 'First text block',
      color: 'blue',
    },
    {
      type: 'Image',
      url: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    },
  ],
}

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Adaptive Cards!</Text>
        <Renderer cardJson={cardJson} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
