import { createStore } from "redux";
import { Reducer } from "../Reducer";
import { devToolsEnhancer } from "redux-devtools-extension";

export const Store = createStore(Reducer, devToolsEnhancer());
