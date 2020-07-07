import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../../Redux/LoginRedux'
// import {createStore} from 'redux'
// import AsyncStorage from '@react-native-community/async-storage'
// import {persiStore,persistReducer} from 'redux-persist'
// import {createLogger} from 'redux-logger'
import TextButton from '../../Components/Button/index'
import InputText from '../../Components/InputText'
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
      Email: this.props.email,
    })
  }

  validateEmail = () => {
    if (!email(this.props.email)) {
      this.props.updateEmailId('error', 'invalid email')
      // console.log('invalid email')
    }
  }
  validatePhone = () => {
    if (!tenNumber(this.props.phone) === true) {
      this.props.updatePhoneNumber('error', 'invalid phone number')
      // console.log('invalid phoneNumber')
    }
  }
  validatePassword = () => {
    if (!empty(this.props.password))
      this.props.updatePassword('error', 'Password can not be empty')
  }
  validateUsername = () => {
    if (!name(this.props.userName))
      this.props.updateUserName('error', 'Enter a valid user name')
  }

  onChangeDisplayName = text => {
    this.props.updateDisplayName('value', text)
  }
  onChangeUserName = text => {
    this.props.updateUserName('value', text)
  }
  onChangePassword = text => {
    this.props.updatePassword('value', text)
  }
  onChangeEmail = text => {
    this.props.updateEmailId('value', text)
  }

  onChangePhoneNumber = text => {
    this.props.updatePhoneNumber('value', text)
  }

  render () {
    console.tron.log(' this.props.', this.props)
    return (
      <ScrollView>
        <View style={styles.conatiner}>
          
          <Image
            source={require('./Images/RBClogo.jpg')}
            style={{
              marginTop: 20,
              height: 100,
              width: 100,
              resizeMode: 'contain',
            }}
          />
          <View style={styles.signUPbox}>
            <OptionalView hide={this.props.isLogin}>
              <InputText
                onChangeText={this.onChangeDisplayName}
                placeholder='Enter Display Name'
                value={this.props.displayName}
                error={this.props.displayNameError}
                onBlur={this.validateName}
              />
            </OptionalView>
            <InputText
              onChangeText={this.onChangeUserName}
              // onChangeText={this.onChangeText('userName')}
              placeholder='Enter UserName'
              value={this.props.userName}
              error={this.props.userNameError}
              onBlur={this.validateUsername}
            />
            <InputText
              // onChangeText={this.onChangeText('password')}
              onChangeText={this.onChangePassword}
              placeholder={'Enter Password'}
              value={this.props.password}
              textContentType='password'
              onBlur={this.validatePassword}
              error={this.props.passwordError}
              password
            />
            <OptionalView hide={this.props.isLogin}>
              <InputText
                // onChangeText={this.onChangeText('email')}
                onChangeText={this.onChangeEmail}
                placeholder={'Enter Email_ID'}
                value={this.props.email}
                onBlur={this.validateEmail}
                error={this.props.emailError}
              />
            </OptionalView>
            <OptionalView hide={this.props.isLogin}>
              <InputText
                onChangeText={this.onChangePhoneNumber}
                placeholder={'Enter PhoneNumber'}
                onBlur={this.validatePhone}
                value={this.props.phone}
                error={this.props.phoneError}
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
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  isLogin: state.login.isLogin,
  loader: state.login.loginLoader,
  displayName: state.login.displayName.value,
  displayNameError: state.login.displayName.error,
  userName: state.login.userName.value,
  userNameError: state.login.userName.error,
  password: state.login.password.value,
  passwordError: state.login.password.error,
  email: state.login.email.value,
  emailError: state.login.email.error,
  phone: state.login.phone.value,
  phoneError: state.login.phone.error,
})

const mapDispatchToProps = dispatch => ({
  registerUser: params => dispatch(Actions.registerUserRequest(params)),
  getLoginData: params => dispatch(Actions.getLoginDetailsRequest(params)),
  updateDisplayName: (key, value) =>
    dispatch(Actions.getUpdateDisplayName(key, value)),
  updateUserName: (key, value) =>
    dispatch(Actions.getUpdateUserName(key, value)),
  updatePassword: (key, value) =>
    dispatch(Actions.getUpdatePassword(key, value)),
  updatePhoneNumber: (key, value) =>
    dispatch(Actions.getUpdatePhoneNumber(key, value)),
  updateEmailId: (key, value) => dispatch(Actions.getUpdateEmail(key, value)),

  setLoginStatus: value => () => dispatch(Actions.setLoginFlag(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
