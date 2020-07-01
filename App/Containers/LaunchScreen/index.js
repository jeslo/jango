import React from 'react'
import {View, TextInput} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../../Redux/LoginRedux'
import TextButton from '../../Components/Button/index'

// Styles
import {styles} from './styles'
class LaunchScreen extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     name: 'jeslo',
  //     age: '27',
  //   }
  // }

  render () {
    console.tron.log(' this.props.', this.props)
    return (
      <View style={styles.conatiner}>
        <View style={styles.signUPbox}>
          <TextInput placeholder={'Enter UserName'} style={styles.textInput} />
          <TextInput placeholder={'Enter Password'} style={styles.textInput} />
          <TextInput placeholder={'Enter Email_ID'} style={styles.textInput} />
          <TextInput
            placeholder={'Enter PhoneNumber'}
            style={styles.textInput}
          />
          <TextButton
            buttonName='Sign In'
            // onPress={() =>
            //   this.props.navigation.navigate('CheckinScreen', {
            //     name: 'Jeslo',
            //     age: '27'
            //   })
            // }
            // onPress={this.props.registerUser({
            //   DisplayName: 'sample string',
            //   UserName: 'jango1',
            //   Phone: '9995989080',
            //   Password: 'samplepasswd',
            //   Email: 'jeslo@gmail.com'
            // })}
            onPress={this.props.loginUser({
              UserName: 'jess',
              Password: 'jess'
            })}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  loader: state.login.logpnLoader
})

const mapDispatchToProps = dispatch => ({
  registerUser: params => () => dispatch(Actions.registerUserRequest(params)),
  loginUser: params => () => dispatch(Actions.getLoginDetailsRequest(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
