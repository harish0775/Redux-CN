import React from "react";
import ReactDOM from "react-dom";
import { createStore , applyMiddleware} from "redux";

import App from "./components/App";
import "./index.css";
import rootReducer from "./reducers";

//function logger(obj,next,action)
// logger(obj)(next)(action)
const logger = function({dispatch,getState}){
   return function(next){
       return function(action){
           //middleware code
           console.log('ACTION_TYPE = ',action.type);
           next(action);
       }
   }
}
const store = createStore(rootReducer, applyMiddleware());
console.log('store', store);

ReactDOM.render(<App store={store} />, document.getElementById("root"));