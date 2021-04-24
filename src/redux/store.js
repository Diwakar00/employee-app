import reducer from "./EmployeeReducer";
import { createStore } from "redux";

let store = createStore(reducer);
export default store;
