import { connect } from 'react-fela'
import { create } from 'fela-stylesheet'

export default styles => {
  const stylesheet = create(styles)
  const mapStylesToProps = props => renderer => Object.keys(stylesheet).reduce((rules, rule) => {
    rules[rule] = renderer.renderRule(stylesheet[rule], props)
    return rules
  }, {})
  return connect(mapStylesToProps)
}
