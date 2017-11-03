import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
  }
})
