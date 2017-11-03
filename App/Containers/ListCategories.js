import React, { Component } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { connect } from 'react-redux'
import ListCategoriesActions from '../Redux/ListCategoriesRedux'
import ReduxPersist from '../Config/ReduxPersist'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ListCategoriesStyle'

class ListCategories extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.listCategoriesRequest()
    }
  }

  renderRow ({item}) {
    return (
      <View style={styles.row}>
        <Text style={styles.label}><Image style={styles.userIcon} source={require('../Images/no_img.png')} /></Text>
        <Text style={styles.label}>{item.title}</Text>
      </View>
    )
  }

  keyExtractor = (item, index) => item.id

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  render () {
    return (
      <View class={styles.wrap}>
        <FlatList
          horizontal
          contentContainerStyle={styles.listContent}
          data={this.props.items}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.listCategories.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    listCategoriesRequest: () => dispatch(ListCategoriesActions.listCategoriesRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCategories)
