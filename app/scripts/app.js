import { render } from 'react-dom'
import React from 'react'
import AppRoot from './views/app_root.js'

export default function app() {

  render(<AppRoot />, document.querySelector('#app'));
}
