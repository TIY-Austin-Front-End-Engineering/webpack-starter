import store from './store.js'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRoot from './components/app_root.js'
import About from './components/about.js'
import Contact from './components/contact.js'

const FooBar = () => (<div>Hi</div>)

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/"      component={AppRoot}/>
          <Route path="/foobar"  component={FooBar} />
          <Route exact path="/about" component={About} />
          <Route path="/contact-us" component={Contact} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
