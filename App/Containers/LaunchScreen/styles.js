import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../Themes'
export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: Colors.rbcwhite,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textInput: {
    paddingHorizontal: 20,
    backgroundColor: Colors.rbcwhite,
    width: 250,
    height: 50,
    borderRadius: 50,
    margin: 5,
    fontSize: 14
  },
  signUPbox: {
    backgroundColor: Colors.rbcblue,
    padding: 30,
    borderRadius: 20,
    alignItems: 'center'
  },
  buttonText: {
    ...Fonts.style.normal,
    color: Colors.buttonColor
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.rbcgreen,
    borderRadius: 10,
    height: 44,
    borderColor: Colors.charcoal,
    borderWidth: 1,
    padding: 10,
    marginTop: 20
  }
})
