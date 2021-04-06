import {ADD_ITEM} from "./types";

export const addTodoItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  }
}