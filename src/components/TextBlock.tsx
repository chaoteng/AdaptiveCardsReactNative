import React, { Component } from 'react'
import { View, Text } from 'react-native'

import ICardComponent from './Renderer'

interface ICardTextBlock extends ICardComponent {
  type: 'TextBlock'
  text: string
  color?: string
}

interface TextBlockProps {
  obj: ICardTextBlock
}

export default class TextBlock extends Component<TextBlockProps, {}> {
  render() {
    const { obj } = this.props

    return <Text style={{ color: obj.color }}>{`TextBlock: ${obj.text}`}</Text>
  }
}
