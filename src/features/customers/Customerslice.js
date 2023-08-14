const initialStatecustomer = {
  fullname: "",
  nationlID: "",
  createAt: "",
};
export default function customerReducer(state = initialStatecustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullname: action.payload.fullname,
        nationlID: action.payload.nationlID,
        createAt: action.payload.createAt,
      };
    case "customer/createCustomer":
      return {
        ...state,
        fullname: action.payload,
      };
    default:
      return state;
  }
}

export function createcustomer(fullname, nationlID) {
  return {
    type: "customer/createCustomer",
    payload: { fullname, nationlID, createAt: new Date().toISOString() },
  };
}
export function updateName(fullname) {
  return {
    type: "account/updateName",
    payload: fullname,
  };
}
