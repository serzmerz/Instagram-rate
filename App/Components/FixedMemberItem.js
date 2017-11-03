import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import styles from './Styles/FixedMemberItemStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import noImage from '../Images/no_img.png'

export default class FixedMemberItem extends Component {
  static defaultProps = {
    item: {
      position: {}
    }
  }

  static propTypes = {
    item: PropTypes.object.isRequired
  }

  render () {
    const { item } = this.props

    return (
      <View style={styles.container}>
        {
            item.position.diff === 0
            ? <View style={styles.wrapPosition}>
              <Text style={styles.labelPosition}>{item.position.number}</Text>
            </View>
            : <View style={styles.wrapPosition}>
              <Text style={styles.labelPosition}>{item.position.number}</Text>
              <Icon name={item.position.to ? `ios-arrow-round-${item.position.to}` : null} color='black' size={15} style={styles.statusRowUpIcon} />
              <Text style={styles.statusRowUp}>{item.position.diff}</Text>
            </View>
        }
        <View style={styles.wrapImg}><Image style={styles.userIcon} source={noImage} /></View>
        <Text style={styles.boldLabel}>{item.title}</Text>
        <Text style={styles.label}>{item.id}</Text>
        <Text style={styles.label}>Fashion</Text>
      </View>
    )
  }
}
