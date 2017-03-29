// Our store keeps track of our app's state
//  and a list of subscribers to update whenenver an event is fired.
export default function Store(startingState) {
  let subscribers = [];
  let state = startingState;

  this.getState = function () {
    return state;
  }

  this.fire = function(event, data) {
    subscribers.forEach(function (sub){
      //Update the app's state to whatever the update function returns.
      var newState = sub(state, event, data)
      if (newState !== undefined && newState !== null) {
        state = newState;
      }
    });
  }

  this.add = function (newSubscriber) {
    subscribers.push(newSubscriber);
  }
}
