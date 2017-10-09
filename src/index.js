import { connect } from 'react-fela'

export default styles => {

  var getRule = (style) => {
    if(typeof style === 'function') {
      return style
    } else {
      return () => {
        return style
      }
    }
  }

  var rules = {}
  for(var i in styles) {
    rules[i] = getRule(styles[i])
  }

  return connect(rules)
}
