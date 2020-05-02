export default (state = {}, action) => {
  //switch is simplified syntax for conditional statement

  //ES6 object destructuring syntax to get other properties from the action object
  const { names, location, issue, id } = action;

  //switch is dependent on action type
  switch (action.type) {
    case "ADD_TICKET":
      //Object.assign to clone the state object and return and altered copy
      //first argument is an empty object, otherwise it would mutate the state directly
      // second argument, the object that will actually be cloned - this case the ticket list state (which is empty above)
      //third argument - the changes that should be made to our copied state
      return Object.assign({}, state, {
        [id]: {
          names: names,
          location: location,
          issue: issue,
          id: id,
        },
      });

    case "DELETE_TICKET":
      const newState = { ...state };
      //this is not entirely pure functionality here
      //we are directly altering the state being called on with delete. Keeping it simple for these lessons
      delete newState[id];
      return newState;

    default:
      return state;
  }
};
