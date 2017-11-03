import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20
  },
  rateRow: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  userIcon: {
    width: 46,
    height: 46
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center'
  },
  label: {
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.snow
  },
  dropDownRow: {
    paddingLeft: 20,
    paddingRight: 20
  },
  wrapStatusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10
  },
  wrapStatusHeaderItem: {
    flexDirection: 'row'
  },
  statusIcon: {
    marginRight: 5
  },
  statusIconRight: {
    marginLeft: 5,
    marginTop: 3
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  wrapStatusBody: {
    paddingRight: 10,
    paddingLeft: 10
  },
  statusBodyRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconLeft: {
    flex: 1
  },
  wrapRowItem: {
    flex: 14,
    flexDirection: 'row',
    alignItems: 'center'
  },
  statusBodyCol: {
    flexDirection: 'row',
    flex: 1
  },
  statusRowRate: {
    marginLeft: 10
  },
  statusRowUp: {
    marginTop: -5,
    fontSize: 10
  },
  statusRowUpIcon: {
    marginLeft: 4,
    marginTop: -6
  },
  statusColText: {
    marginRight: 10
  },
  rowPadding: {
    paddingTop: 5,
    paddingBottom: 5
  },
  body: {
    marginTop: 20
  },
  highlightsHeader: {
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 20
  },
  statusTextDate: {
    fontSize: 20,
    textAlign: 'right'
  },
  highlightCore: {
    fontSize: 20,
    marginLeft: 5
  },
  wrapRowDropDown: {
    flexDirection: 'row'
  },
  wrapDropDown: {
    flex: 1
  },
  infoBtn: {
    width: 20,
    alignSelf: 'flex-end',
    marginLeft: 4,
    marginBottom: 15
  }
})
