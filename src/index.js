import { connect } from 'react-fela'

export default styles => {
  var rules = Object.keys(styles).map((key) => {
    var value = styles[key]
    if(typeof value === 'function'){
      return value
    } else {
      return () => {
        return value
      }
    }
  })
  return connect(rules)
}
