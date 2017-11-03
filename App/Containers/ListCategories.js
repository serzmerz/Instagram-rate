import React, { Component } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { connect } from 'react-redux'
import CategoriesActions from '../Redux/CategoriesRedux'
import ReduxPersist from '../Config/ReduxPersist'

import styles from './Styles/ListCategoriesStyle'
import noImage from '../Images/no_img.png'

class ListCategories extends Component {
  componentDidMount () {
    if (!ReduxPersist.active) {
      this.props.categoriesRequest()
    }
  }

  renderRow = ({ item }) => (
    <View style={styles.row}>
      <Image style={styles.userIcon} source={noImage} />
      <Text style={styles.label}>{item.value}</Text>
    </View>
  )

  keyExtractor = item => item.id

  render () {
    return (
      <View style={styles.wrap}>
        <FlatList
          horizontal
          contentContainerStyle={styles.listContent}
          data={this.props.items}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={20}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({ items: state.listCategories.data })

const mapDispatchToProps = (dispatch) => ({
  categoriesRequest: () => dispatch(CategoriesActions.getCategoriesRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListCategories)
