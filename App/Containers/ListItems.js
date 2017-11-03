import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import ReduxPersist from '../Config/ReduxPersist'
import ListItemsActions from '../Redux/ListItemsRedux'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/ListItemsStyle'
import ListCategories from '../Containers/ListCategories'

class ListItems extends Component {
  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.listRequest()
    }
  }

  /* ***********************************************************
  * STEP 2
  * `renderRow` function. How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={item.title} description={item.description} />
  *************************************************************/
  renderRow ({item}) {
    return (
      <View style={styles.row}>
        <Text style={styles.label}>{item.position}</Text>
        <Text style={styles.label}><Image style={styles.userIcon} source={require('../Images/no_img.png')} /></Text>
        <Text style={styles.boldLabel}>{item.title}</Text>
        <Text style={styles.label}>{item.id}</Text>
        <Text style={styles.label}>Follow</Text>
      </View>
    )
  }

  /* ***********************************************************
  * STEP 3
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *************************************************************/
  // Render a header?
  renderHeader = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Header - </Text>

  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Footer - </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.categoryLabel}>ListCategories Component</Text>
        <ListCategories />
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.props.items}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.listItems.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    listRequest: () => dispatch(ListItemsActions.listRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItems)
