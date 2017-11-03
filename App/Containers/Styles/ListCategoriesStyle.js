import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  row: {
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: Metrics.smallMargin
  },
  userIcon: {
    width: 50,
    height: 50
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  }
})
