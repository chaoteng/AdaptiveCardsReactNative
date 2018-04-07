import React, { Component } from 'react'
import { Image } from 'react-native'

import ICardComponent from './Renderer'

interface ICardImage extends ICardComponent {
  type: 'Image'
  url: string
}

interface CardImageProps {
  obj: ICardImage
}

export default class CardImage extends Component<CardImageProps, {}> {
  render() {
    const { obj } = this.props

    return <Image source={{ uri: obj.url }} style={{ width: 50, height: 50 }} />
  }
}
