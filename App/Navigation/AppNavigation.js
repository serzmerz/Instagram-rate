import { StackNavigator } from 'react-navigation'
import ProfileScreen from '../Containers/ProfileScreen'
import ListCategories from '../Containers/ListCategories'
import LoginScreen from '../Containers/LoginScreen'
import ListMembers from '../Containers/ListMembers'
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
  ListMembers: {
    screen: ListMembers,
    navigationOptions: {
      headerRight: <Icon name='md-settings' size={30} color='#fff' />,
      headerLeft: <Icon name='md-person' size={30} color='#fff' />
    }
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      headerRight: <Icon name='md-settings' size={30} color='#fff' />,
      headerLeft: <Icon name='md-person' size={30} color='#fff' />
    }
  }
}, {
  // Default config for all screens
  initialRouteName: 'ListMembers',
  navigationOptions: {
    title: 'HYPEBOARD',
    headerTitleStyle: styles.headerTitle,
    headerStyle: styles.header
  }
})

export default PrimaryNav
