import { StackNavigator } from 'react-navigation'
import ListCategories from '../Containers/ListCategories'
import LoginScreen from '../Containers/LoginScreen'
import ListItems from '../Containers/ListItems'
import LaunchScreen from '../Containers/LaunchScreen'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './Styles/NavigationStyles'
import * as React from 'react'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ListCategories: { screen: ListCategories },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerRight: <Icon name='md-settings' size={30} color='#fff' />,
      headerLeft: <Icon name='md-person' size={30} color='#fff' />
    }
  },
  ListItems: {
    screen: ListItems,
    navigationOptions: {
      headerRight: <Icon name='md-settings' size={30} color='#fff' />,
      headerLeft: <Icon name='md-person' size={30} color='#fff' />
    }
  },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    title: 'HYPEBOARD',
    headerStyle: styles.header
  }
})

export default PrimaryNav
