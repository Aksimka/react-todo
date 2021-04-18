import { types } from '@mozaikjs/core'
import loggerPlugin from '@mozaikjs/logger'

const initialTodoList = [
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
]

const todoListItemModel = types.model({
  id: types.number,
  title: types.string,
  date: types.string,
  time: types.string,
})

const storeModel = types.model({
  todoList: types.array(todoListItemModel)
  })
  .actions({
    addTodoItem({ dispatch, state }, item) {
      dispatch({
        todoList: [...state().todoList, item]
      })
    },
    deleteTodoItem({ dispatch, state }, index) {
      console.log(index, 'index');
      let list = state().todoList
      list.splice(index, 1)
      dispatch({
        todoList: list
      })
    }
  })
  .plugins(loggerPlugin())

const store = storeModel.create({
  todoList: initialTodoList
})

export default store
























