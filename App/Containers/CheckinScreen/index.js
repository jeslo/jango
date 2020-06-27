import React from 'react'
import {View, Text} from 'react-native'

import {styles} from './styles'

export default class CheckinScreen extends React.Component {
  render () {
    return (
      <View style={styles.conatiner}>
        <Text>'Hi welcome to check in'</Text>
      </View>
    )
  }
}
