import React from 'react'
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../../Redux/LoginRedux'
// import {createStore} from 'redux'
// import AsyncStorage from '@react-native-community/async-storage'
// import {persiStore,persistReducer} from 'redux-persist'
// import {createLogger} from 'redux-logger'
import TextButton from '../../Components/Button/index'
import OptionalView from '../../Components/OptionalView'
import {email, tenNumber, name, empty} from '../../Transforms/ConvertFromKelvin'
// import {email, tenNumber, name} from '../../Transforms'

// Styles
import {styles} from './styles'

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whiteist: ['']
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)

class LaunchScreen extends React.Component {
  fetchLogin = () => {
    this.props.getLoginData({
      UserName: this.props.userName,
      Password: this.props.password,
    })
  }

  fetchSignUp = () => {
    this.props.registerUser({
      DisplayName: this.props.displayName,
      UserName: this.props.userName,
      Phone: this.props.phone,
      Password: this.props.password,
      Email: this.props.email
    })
  }

  validateEmail = text => {
    if (email(text) === true) {
      console.log('invalid email')
    }
  }
  validatePhone = text => {
    if (tenNumber(text) === true) {
      console.log('invalid phoneNumber')
    }
  }
  
  onChangeDisplayName = text => {
    this.props.updateDisplayName(text)
  }
  onChangeUserName = text => {
    this.props.updateUserName(text)
  }
  onChangePassword = text => {
    this.props.updatePassword(text)
  }
  onChangeEmail = text => {
    this.props.updateEmailId(text)
  }

  onChangePhoneNumber = text => {
    this.props.updatePhoneNumber(text)
  }

  // onChangeText = (key) => (text) => {
  //   this.props.updateUserName(text, key)
  // }

  render () {
    console.tron.log(' this.props.', this.props)
    return (
      <View style={styles.conatiner}>
        <Image source={require('./Images/RBClogo.jpg')} />
        <View style={styles.signUPbox}>
          <OptionalView hide={this.props.isLogin}>
            <TextInput
              onChangeText={this.onChangeDisplayName}
              placeholder='Enter Display Name'
              style={styles.textInput}
              value={this.props.displayName}
            />
          </OptionalView>
          <TextInput
            onChangeText={this.onChangeUserName}
            // onChangeText={this.onChangeText('userName')}
            placeholder='Enter UserName'
            style={styles.textInput}
            value={this.props.userName}
          />
          <TextInput
            // onChangeText={this.onChangeText('password')}
            onChangeText={this.onChangePassword}
            placeholder={'Enter Password'}
            style={styles.textInput}
            value={this.props.password}
            textContentType='password'
            secureTextEntry
          />
          <OptionalView hide={this.props.isLogin}>
            <TextInput
              // onChangeText={this.onChangeText('email')}
              onChangeText={this.onChangeEmail}
              placeholder={'Enter Email_ID'}
              style={styles.textInput}
              value={this.props.email}
              onEndEditing={this.validateEmail(this.props.email)}
            />
          </OptionalView>
          <OptionalView hide={this.props.isLogin}>
            <TextInput
              onChangeText={this.onChangePhoneNumber}
              placeholder={'Enter PhoneNumber'}
              style={styles.textInput}
              value={this.props.phone}
              onEndEditing={this.validatePhone(this.props.phone)}
              
            />
          </OptionalView>
          <TextButton
            buttonName={this.props.isLogin ? 'Login' : 'Signup'}
            onPress={this.props.isLogin ? this.fetchLogin : this.fetchSignUp}
          />
          {this.props.isLogin ? (
            <TouchableOpacity onPress={this.props.setLoginStatus(false)}>
              <Text style={styles.text}>New member click here to Signup</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.props.setLoginStatus(true)}>
              <Text style={styles.text}>
                Haven an account click here to Login
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  isLogin: state.login.isLogin,
  loader: state.login.loginLoader,
  displayName: state.login.displayName.value,
  userName: state.login.userName.value,
  password: state.login.password.value,
  email: state.login.email.value,
  phone: state.login.phone.value,
})

const mapDispatchToProps = dispatch => ({
  registerUser: params => dispatch(Actions.registerUserRequest(params)),
  getLoginData: params => dispatch(Actions.getLoginDetailsRequest(params)),
  updateDisplayName: value => dispatch(Actions.getUpdateDisplayName(value)),
  updateUserName: value => dispatch(Actions.getUpdateUserName(value)),
  updatePassword: value => dispatch(Actions.getUpdatePassword(value)),
  updatePhoneNumber: value => dispatch(Actions.getUpdatePhoneNumber(value)),
  updateEmailId: value => dispatch(Actions.getUpdateEmail(value)),

  setLoginStatus: value => () => dispatch(Actions.setLoginFlag(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
