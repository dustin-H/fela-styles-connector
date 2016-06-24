import { connect } from 'react-fela'

export default styles => {
  const mapStylesToProps = props => renderer => Object.keys(styles).reduce((classNames, rule) => {
    const currentRule = styles[rule]

    if (typeof currentRule !== 'function') {
    	styles[rule] = () => currentRule
    }

    classNames[rule] = renderer.renderRule(styles[rule])
    return classNames
  }, {})
  return connect(mapStylesToProps)
}
