import { combineReducers, createStore } from "redux";
import accountreducer from "./features/accounts/Accountslice";
import customerReducer from "./features/customers/Customerslice";
const rootreducer = combineReducers({
  account: accountreducer,
  account: customerReducer,
});

const store = createStore(rootreducer);

export default store;
