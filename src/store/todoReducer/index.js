import {ADD_ITEM} from "./types";

const initialState = {
  todoList: [
    {
      id: 1,
      title: "Design Meeting",
      date: "2021-03-04T19:44:22.107Z",
      time: "10:00 - 11:30",
    },
    {
      id: 2,
      title: "Design Meeting",
      date: "2021-03-12T19:44:22.107Z",
      time: "10:00 - 11:30",
    }
  ],
};

const todoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, todoList: [...state.todoList, action.payload]};
    default: return state;
  }
};

export default todoReducer;