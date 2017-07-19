import { connect } from 'react-fela'
import { StyleSheet } from 'fela-tools'

export default styles => {
  const stylesheet = StyleSheet.create(styles)
  const mapStylesToProps = props => renderer => Object.keys(stylesheet).reduce((rules, rule) => {
    rules[rule] = renderer.renderRule(stylesheet[rule], props)
    return rules
  }, {})
  return connect(mapStylesToProps)
}
