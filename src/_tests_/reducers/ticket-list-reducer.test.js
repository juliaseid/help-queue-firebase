import ticketListReducer from "../../reducers/ticket-list-reducer";

let action;
//declare an action but don't define it. Each test will define what the action should be
const ticketData = {
  names: "Ryan & Aimen",
  location: "4b",
  issue: "Redux action is not working correctly.",
  id: 1,
};

//to demonstrate that if a key of an object already exists, it will update.
const updatedTicketData = {
  names: "Ryan & Aimen",
  location: "4b",
  issue: "Now everything is broken!!!!!!!!!!",
  id: 1,
};

//to test if correct ticket is being deleted
const currentState = {
  1: {
    names: "Ryan & Aimen",
    location: "4b",
    issue: "Redux action is not working correctly.",
    id: 1,
  },
  2: {
    names: "Jasmine and Justine",
    location: "2a",
    issue: "Reducer has side effects.",
    id: 2,
  },
};

describe("ticketListReducer", () => {
  test("Should successfully add new ticket data to masterTicketList", () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: "ADD_TICKET",
      names: names,
      location: location,
      issue: issue,
      id: id,
    };

    expect(ticketListReducer({}, action)).toEqual({
      1: {
        names: names,
        location: location,
        issue: issue,
        id: id,
      },
    });
  });

  test("Should update ticket data if key already exists using the same ADD_TICKET Reducer", () => {
    const { names, location, issue, id } = updatedTicketData;
    action = {
      type: "ADD_TICKET",
      names: names,
      location: location,
      issue: issue,
      id: id,
    };

    expect(ticketListReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id,
      },
    });
  });

  test("Should successfully delete a ticket", () => {
    action = {
      type: "DELETE_TICKET",
      id: 1,
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {
        names: "Jasmine and Justine",
        location: "2a",
        issue: "Reducer has side effects.",
        id: 2,
      },
    });
  });

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });
});

// expect(ticketListReducer({}, {type: null})).toEqual({});
//expect from Jest and plain JS
//ticketListReducer - reducer handles the update to state
//Reducer takes two arguments - current state and ACTION (it's an object with not much in it right now)
//toEqual method - Jest test

//action type is null - we do nothing to it
