import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    paddingTop: 200
  },
  wrap: {
    paddingTop: 300,
    backgroundColor: Colors.fire
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  row: {
    padding: 10,
    backgroundColor: Colors.fire,
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
