import { createAppContainer } from 'react-navigation'
import Jango from '../Containers/Jango'
import { createStackNavigator } from 'react-navigation-stack'
import LaunchScreen from '../Containers/LaunchScreen'
import CheckinScreen from '../Containers/CheckinScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  Jango: { screen: Jango },
  LaunchScreen: { screen: LaunchScreen },
  CheckinScreen: { screen: CheckinScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
