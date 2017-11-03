import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: Colors.fire,
    marginVertical: 1,
    overflow: 'hidden'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  boldLabel: {
    flex: 2,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center'
  },
  label: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.snow
  },
  wrapPosition: {
    flex: 1,
    flexDirection: 'row'
  },
  labelPosition: {
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.snow
  },
  body: {
    marginTop: 10
  },
  userIcon: {
    width: 46,
    height: 46
  },
  wrapImg: {
    flex: 1
  },
  wrapStatusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  statusIcon: {
    marginRight: 5
  },
  iconLeft: {
    flex: 1
  },
  wrapStatusHeaderItem: {
    flexDirection: 'row'
  },
  statusIconRight: {
    marginLeft: 5,
    marginTop: 3
  },
  wrapStatusBody: {
    paddingRight: 10,
    paddingLeft: 10
  },
  statusBodyRow: {
    flexDirection: 'row'
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
  warningText: {
    textAlign: 'center',
    marginTop: 5
  }
})
