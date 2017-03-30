import { createStore } from 'redux'
export default function app() {

  console.log(createStore(function (state = [], action) {
    return state;
  }));
}
