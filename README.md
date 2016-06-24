# fela-styles-connector
Allows to connect a fela styles object to a react component

This is just a little helper for [fela](https://github.com/rofrischmann/fela).

## Usage

```js
import React, { PropTypes, Component } from 'react'
import felaStylesConnector from 'fela-styles-connector'

const style = {
  header: {
    color: 'red'
  },
  title: {
    fontSize: 42
  }
}

var connect = felaStylesConnector(style)

class Header extends Component {
  render() {
    const {data, actions, styles} = this.props
    return (
      <header className={ styles.header }>
        <span className={ style.title }>My Title!</span>
      </header>
    )
  }
}

export default connect(Header)
```
