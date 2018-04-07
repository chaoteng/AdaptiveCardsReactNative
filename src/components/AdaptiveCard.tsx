import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class AdaptiveCard extends Component {
  render() {
    return (
      <View
        style={{
          borderColor: 'black',
          borderWidth: 1,
          width: 300,
          height: 300,
        }}
      >
        <Text>'Adaptive Card'</Text>
        {this.props.children}
      </View>
    )
  }
}
