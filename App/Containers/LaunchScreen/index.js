import React, {Component} from 'react'
import {View, TextInput} from 'react-native'
import TextButton from '../../Components/Button/index'

// Styles
import {styles} from './styles'

export default class LaunchScreen extends Component {
  render () {
    console.tron.log(' this.props.', this.props)
    return (
      <View style={styles.conatiner}>
        <View style={styles.signUPbox}>
          <TextInput placeholder={'Enter UserName'} style={styles.textInput} />
          <TextInput placeholder={'Enter Password'} style={styles.textInput} />
          <TextInput placeholder={'Enter Email_ID'} style={styles.textInput} />
          <TextInput
            placeholder={'Enter Phone number'}
            style={styles.textInput}
          />
          <TextButton
            buttonName='Sign In'
            onPress={() => this.props.navigation.navigate('CheckinScreen')}
          />
        </View>
      </View>
    )
  }
}
