import { createStore } from "redux";
import bookingReducer from "./bookingFeature/bookingReducer";

const store = createStore(bookingReducer);

export default store;