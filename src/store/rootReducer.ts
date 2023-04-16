import { combineReducers } from "redux";
import { todoReducer } from './todos/todos-reducer'


export const rootReducer = combineReducers({
  todos: todoReducer,
})