import { IActiontypedefault } from "../../types/actionTypes";

const initialState = [
  {id: 1, text: 'Create React App', completed: false, category: 'Day'},
  {id: 2, text: 'Typescript Basics', completed: false, category: 'Day'},
  {id: 3, text: 'Redux Toolkit end projects', completed: false, category: 'Day'},
  {id: 4, text: 'CSS HTML JS in one day', completed: true, category: 'Day'},
  {id: 5, text: 'GreenSock practice', completed: false, category: 'Day'},
]


export const todoReducer = (state = initialState, action: IActiontypedefault) => {
  switch (action.type) {
    default:
      return state;
  }
}