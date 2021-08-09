import { combineReducers } from "redux";
import { productReducer, selectProductReducer } from "./productReducers";

const reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectProductReducer,
});
export default reducers;
