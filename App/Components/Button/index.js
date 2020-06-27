import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {styles} from './styles'

export default class Button extends React.Component {
  static defaultProps = {
    onPress: () => {}
  }
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <Text style={styles.buttonText}>{this.props.buttonName}</Text>
      </TouchableOpacity>
    )
  }
}
