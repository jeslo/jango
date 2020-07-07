import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../Themes'
export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.error,
    alignItems: 'center',
    marginBottom: 0
  },
  scroll: {
    backgroundColor: Colors.cloud,
    flex: 1
  },
  text: {
    paddingTop: 20
  },
  signUPbox: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: Colors.rbcblue,
    padding: 30,
    borderRadius: 20,
    alignSelf: 'stretch'
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
