import { types } from '@mozaikjs/core'

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


export default storeModel