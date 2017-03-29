import Store from './store.js'

export default function app() {
  //All of your code starts here

  //Example of the most minimal view possible.
  let defaultView = `<h1>Hello World!</h1>`

  //The default state of this app is nothing, just an empty object.
  //  Don't worry about adding state until you need to keep track of it across views.
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
      // Your update code goes below here

      if (event === "hello_world") {
        console.log("hello world!");
        //Always return the state;
        return state;
      }

      // Your update code goes above here
      console.debug(`Unhandled Event: '${event}'`);
      return;
    }
  };

  const render = function (state, event, data) {
    // You will want to update this render function to render
    $('#app').html(defaultView);
  };

  // Every time an event is fired the update function will run
  //  and *then* the render function will run after that.
  store.add(update);
  store.add(render);
  store.fire("hello_world"); // Feel free to delete. This is just an example.
}
