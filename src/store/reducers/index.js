import { combineReducers } from "redux";
import TrendingReducer from "./reducerTrending";

const rootReducer = combineReducers({
  trending: TrendingReducer,
});

export default rootReducer;
