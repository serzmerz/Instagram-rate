import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import styles from './Styles/LoginScreenStyle'
import RoundedButton from '../Components/RoundedButton'

class LoginScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>LoginScreen</Text>
        <RoundedButton text='Connect' onPress={() => this.props.navigation.navigate('ListItems')} />
      </ScrollView>
    )
  }
}

export default LoginScreen
