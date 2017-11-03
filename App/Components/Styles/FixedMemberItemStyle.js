import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: Colors.background,
    marginVertical: Metrics.smallMargin / 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
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
  statusRowUp: {
    marginTop: -5,
    fontSize: 10
  },
  statusRowUpIcon: {
    marginLeft: 4,
    marginTop: -6
  },
  userIcon: {
    width: 46,
    height: 46
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
  wrapImg: {
    flex: 1
  }
})
