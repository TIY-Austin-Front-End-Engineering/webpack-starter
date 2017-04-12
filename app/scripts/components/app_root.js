import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import container from '../containers/all.js'


const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
    </nav>
  )
}

class AppRoot extends React.Component {
  render () {
    return (
      <main>
        <NavBar/>
        <section>
          <h1>Whoa!</h1>
        </section>
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot)
