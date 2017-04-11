import store from './store.js'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRoot from './components/app_root.js'

export default function app() {
  render(
    <Provider store={store}>
      <AppRoot />
    </Provider>,
    document.getElementById('app')
  )
}
