import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ReduxPersist from '../Config/ReduxPersist'
import MembersActions from '../Redux/MembersRedux'

import styles from './Styles/ListItemsStyle'
import ListCategories from '../Containers/ListCategories'
import MemberItem from '../Components/MemberItem'
import FixedMemberItem from '../Components/FixedMemberItem'

class ListItems extends Component {
  componentDidMount () {
    if (!ReduxPersist.active) {
      this.props.membersRequest()
    }
  }

  renderRow = ({ item }) => (
    <MemberItem item={item} />
  )

  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  keyExtractor = item => item.id

  render () {
    const item = this.props.items.find(item => item.id === 35339)
    return (
      <View style={styles.container}>
        <Text style={styles.categoryLabel}>Categories</Text>
        <ListCategories />
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.props.items}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={20}
          ListEmptyComponent={this.renderEmpty}
        />
        <View style={{height: 60}}>
          <FixedMemberItem item={item} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({ items: state.listItems.items })

const mapDispatchToProps = (dispatch) => ({
  membersRequest: () => dispatch(MembersActions.getMembersRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItems)
