import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './Styles/MemberStatsStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import each from 'lodash/each'
import map from 'lodash/map'

export default class MemberStats extends Component {
  static defaultProps = {
    item: {}
  }
  static propTypes = {
    item: PropTypes.object
  }

  renderStatusRowItem = (rowData) => {
    return <View style={styles.wrapRowItem}>
      {rowData.map((item, index) => {
        return item.number
          ? <View key={index} style={styles.statusBodyCol}>
            <Text>{item.name}</Text>
            <Text style={styles.statusRowRate}>{item.number}</Text>
            <Icon name={item.to ? `ios-arrow-round-${item.to}` : null} color='black' size={15} style={styles.statusRowUpIcon} />
            <Text style={styles.statusRowUp}>{item.diff}</Text>
          </View>
          : <View key={index} style={styles.statusBodyCol}>
            <Text style={styles.statusColText}>{item.name}</Text>
            <Icon name={item.to ? `ios-arrow-round-${item.to}` : null} color='black' size={15} />
            <Text style={{fontSize: 12}}>{item.diff}</Text>
          </View>
      }
      )}
    </View>
  }

  renderStatusRow = (stat) => {
    const classIcons = {
      rate: 'md-stats',
      followers: 'md-contacts',
      likes: 'md-heart',
      posts: 'md-albums'
    }
    let result = []
    each(stat, (value, key) => {
      if (key !== 'common') {
        result = [
          ...result,
          (<View key={key} style={styles.statusBodyRow}>
            <Icon name={classIcons[key]} size={22} color='black' style={[styles.statusIcon, styles.iconLeft]} />
            { this.renderStatusRowItem(value) }
          </View>)
        ]
      }
    })
    return result
  }

  renderHeaderItems = (common) => {
    const classIcons = {
      followers: 'md-contacts',
      likes: 'md-heart',
      posts: 'md-albums'
    }
    return (
      <View style={styles.wrapStatusHeader}>
        { map(common, (value, key) => {
          return (<View key={key} style={styles.wrapStatusHeaderItem}>
            <Icon name={classIcons[key]} size={22} color='black' style={styles.statusIcon} />
            <Text style={styles.statusText}>{value}</Text>
            <Icon name='ios-information-circle-outline' size={18} color='black' style={styles.statusIconRight} />
          </View>)
        }) }
      </View>
    )
  }

  render () {
    const { item } = this.props
    return (
      <View>
        { this.renderHeaderItems(item.common) }
        <View style={styles.wrapStatusBody}>
          { this.renderStatusRow(item) }
        </View>
      </View>
    )
  }
}
