import Store from './store.js'

export default function app() {
  //All of your code starts here
  let defaultView = `<h1>Hello World!</h1>`

  let initialState = {
  };

  const store = new Store(initialState);

  const update = function (state, event, data) {
    console.log(`Update was called because the '${event}' event was fired.`);
    if (state === undefined || event === undefined) {
      console.debug("Error: Something is undefined")
      console.debug(`State: ${state} | Event: '${event}'`);
      return;
    } else {

      if (event === "hello_world") {
        console.log("hello world!");
        //Always return the state;
        return state;
      }

      console.debug(`Unhandled Event: '${event}'`);
      return;
    }
  };

  const render = function (state, event, data) {
    $('#app').html(defaultView);
  };

  store.add(update);
  store.add(render);
  store.fire("hello_world");
}
