import React, { Component } from 'react'
import { View } from 'react-native'

import AdaptiveCard from './AdaptiveCard'
import TextBlock from './TextBlock'
import CardImage from './Image'

interface RendererProps {
  cardJson: object
}

interface RendererState {
  card: Component
}

/* TODO: Investigate the TypeScript way to handle interface switching */

export interface ICardComponent {
  type: 'TextBlock' | 'Image'
}

function convertObjectToComponent(obj: ICardComponent, key?: string) {
  switch (obj.type) {
    case 'TextBlock': {
      return <TextBlock obj={obj} key={key} />
    }
    case 'Image': {
      return <CardImage obj={obj} key={key} />
    }
    default:
      return undefined
  }
}

interface ICard {
  type: 'AdaptiveCard'
  body: Array<ICardComponent>
}

function convertJsonToCard(cardJson: ICard) {
  if (cardJson.type !== 'AdaptiveCard' || !cardJson.body) {
    return undefined
  }

  // TODO: handle versioning

  // Render body
  const children = cardJson.body.map((component, index) =>
    convertObjectToComponent(component, `${index}`)
  )

  // TODO: Handle actions

  return <AdaptiveCard>{children}</AdaptiveCard>
}

export default class Renderer extends Component<RendererProps, RendererState> {
  static getDerivedStateFromProps(nextProps, prevState) {
    // TODO: Add smart component comparison to only update changed component
    if (nextProps.cardJson !== prevState.prevCardJson) {
      return {
        prevCardJson: nextProps.cardJson,
        card: convertJsonToCard(nextProps.cardJson),
      }
    }

    return null
  }

  constructor(props) {
    super(props)

    this.state = {
      card: undefined,
    }
  }

  render() {
    return <View>{this.state.card}</View>
  }
}
