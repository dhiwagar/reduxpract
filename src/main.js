import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./Store";

store.dispatch({ type: "account/deposit", payload: 250 });

console.log(store.getState());
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
