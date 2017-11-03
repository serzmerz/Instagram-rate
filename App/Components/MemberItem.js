import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Animated, Image } from 'react-native'
import styles from './Styles/MemberItemStyle'
import PropTypes from 'prop-types'
import noImage from '../Images/no_img.png'
import Icon from 'react-native-vector-icons/Ionicons'
import MemberStats from './MemberStats'

export default class MemberItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      expanded: false,
      animation: new Animated.Value(55)
    }
  }

  _setHeight = (key, value) => () => {
    this.setState({
      [key]: value
    })
  }

  onToggle = () => {
    const initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight
    const finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight

    this.setState({
      expanded: !this.state.expanded
    })

    this.state.animation.setValue(initialValue)
    Animated.spring(
      this.state.animation,
      {
        toValue: finalValue
      }
    ).start()
  }

  render () {
    const { item } = this.props

    return (
      <TouchableOpacity onPress={this.onToggle}>
        <Animated.View style={[styles.container, { height: this.state.animation }]}>
          <View style={styles.titleContainer} onLayout={this._setHeight('minHeight', 55)}>
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
            <Text style={styles.label}>Follow</Text>
          </View>
          <View style={styles.body} onLayout={this._setHeight('maxHeight', 155)}>
            <MemberStats item={item.stats} />
            <Text style={styles.warningText}>
              <Icon name='md-warning' size={15} color='black' style={styles.statusIcon} />
              Report this account</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    )
  }
}
