import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.navbar,
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.baseMargin
  },
  headerTitle: {
    color: Colors.snow,
    alignSelf: 'center'
  }
})
