import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import styles from './Styles/ProfileScreenStyle'
import noImage from '../Images/no_img.png'
import { Dropdown } from 'react-native-material-dropdown'
import Icon from 'react-native-vector-icons/Ionicons'
import MemberStats from '../Components/MemberStats'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ReduxPersist from '../Config/ReduxPersist'
import UserProfileTypes from '../Redux/UserProfileRedux'
import CategoriesActions from '../Redux/CategoriesRedux'
import map from 'lodash/map'
import CountriesTypes from '../Redux/CountriesRedux'

class ProfileScreen extends Component {
  static defaultProps = {
    userProfile: {}
  }
  static propTypes = {
    userProfile: PropTypes.object
  }
  constructor (props) {
    super(props)
    this.state = {
      category: {},
      country: {}
    }
  }

  componentDidMount () {
    if (!ReduxPersist.active) {
      this.props.userProfileRequest()
      this.props.categoriesRequest()
      this.props.countriesRequest()
    }
  }

  onChangeCategory = (text, index) => {
    this.setState({category: this.props.categories[index]})
  }

  onChangeCountry = (text, index) => {
    this.setState({country: this.props.countries[index]})
  }

  renderHighlightsRows = (highlight) => {
    const classIcons = {
      rate: 'md-stats',
      followers: 'md-contacts',
      likes: 'md-heart',
      posts: 'md-albums'
    }
    return map(highlight, (value, key) => {
      return (<View key={key} style={[styles.statusBodyRow, styles.rowPadding]}>
        <Icon name={classIcons[key]} size={22} color='black' style={[styles.statusIcon, styles.iconLeft]} />
        <View style={styles.statusBodyCol}>
          <Icon name={value.to ? `ios-arrow-round-${value.to}` : null} color='black' size={25} />
          <Text style={styles.highlightCore}>{value.number}</Text>
        </View>
        <View style={[styles.statusBodyCol, { justifyContent: 'flex-end' }]}>
          <Text style={[styles.statusColText, styles.statusTextDate]}>{value.date}</Text>
        </View>
      </View>)
    })
  }

  render () {
    const { userProfile } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.rateRow}>
          <View><Image style={styles.userIcon} source={noImage} /></View>
          <Text style={styles.boldLabel}>{userProfile.instagramId}</Text>
          <Text style={styles.label}>{userProfile.id}</Text>
        </View>
        <View style={styles.dropDownRow}>
          <Dropdown
            label='Country'
            data={this.props.countries}
            value={userProfile.country ? userProfile.country.value : ''}
            onChangeText={this.onChangeCountry}
          />
          <View style={styles.wrapRowDropDown}>
            <View style={styles.wrapDropDown}>
              <Dropdown
                label='Category'
                data={this.props.categories}
                value={userProfile.category ? userProfile.category.value : ''}
                onChangeText={this.onChangeCategory}
            />
            </View>
            <View style={styles.infoBtn}>
              <Icon name='ios-information-circle-outline' size={25} color='black' />
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <MemberStats item={userProfile.stats} />
        </View>
        <View style={styles.body}>
          <Text style={styles.highlightsHeader}>My Highlights</Text>
          <View style={styles.wrapStatusBody}>
            {this.renderHighlightsRows(userProfile.highlight)}
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.userProfile.data,
  categories: state.listCategories.data,
  countries: state.listCountries.data
})
const mapDispatchToProps = (dispatch) => ({
  userProfileRequest: () => dispatch(UserProfileTypes.getUserProfileRequest()),
  categoriesRequest: () => dispatch(CategoriesActions.getCategoriesRequest()),
  countriesRequest: () => dispatch(CountriesTypes.getCountriesRequest())

})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
