import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

const AppRoot = React.createClass({
  render: function () {
    return (
      <section>
        <h1>Whoa!</h1>
      </section>
    );
  }
});

export default connect(container.allState)(AppRoot)
