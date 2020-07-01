import React from 'react'
import {View, TextInput, Text} from 'react-native'
import {connect} from 'react-redux'
// import {createStore} from 'redux'
// import AsyncStorage from '@react-native-community/async-storage'
// import {persiStore,persistReducer} from 'redux-persist'
// import {createLogger} from 'redux-logger'
import Actions from '../../Redux/LoginRedux'
import TextButton from '../../Components/Button/index'
import OptionalView from '../../Components/OptionalView'

// Styles
import {styles} from './styles'

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whiteist: ['']
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)

class LaunchScreen extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     name: 'jeslo',
  //     age: '27',
  //   }
  // }
  fetchLogin = () => {
    this.props.getLoginData({
      UserName: this.props.userName,
      Password: this.props.password
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
            />
          </OptionalView>
          <OptionalView hide={this.props.isLogin}>
            <TextInput
              onChangeText={this.onChangePhoneNumber}
              placeholder={'Enter PhoneNumber'}
              style={styles.textInput}
              value={this.props.phone}
            />
          </OptionalView>
          {this.props.isLogin ? <Text>showing testing etc</Text> : null}

          <TextButton
            buttonName={this.props.isLogin ? 'Sign In' : 'Sign Up'}
            onPress={this.props.isLogin ? this.fetchLogin : this.fetchSignUp}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  isLogin: state.isLogin,
  loader: state.login.loginLoader,
  displayName: state.login.displayName.value,
  userName: state.login.userName.value,
  password: state.login.password.value,
  email: state.login.email.value,
  phone: state.login.phone.value
})

const mapDispatchToProps = dispatch => ({
  registerUser: params => dispatch(Actions.registerUserRequest(params)),
  getLoginData: params => dispatch(Actions.getLoginDetailsRequest(params)),

  updateDisplayName: value => dispatch(Actions.getUpdateDisplayName(value)),

  updateUserName: value => dispatch(Actions.getUpdateUserName(value)),

  updatePassword: value => dispatch(Actions.getUpdatePassword(value)),

  updatePhoneNumber: value => dispatch(Actions.getUpdatePhoneNumber(value)),

  updateEmailId: value => dispatch(Actions.getUpdateEmail(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
