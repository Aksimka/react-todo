import { types } from '@mozaikjs/core'
import dayjs from 'dayjs'

export const initialTodoModel = {
  todoList: JSON.parse(localStorage.getItem('todoList')) || [],
}

const todoListItemModel = types.model({
  id: types.number,
  title: types.string,
  date: types.string,
  fromTime: types.string,
  toTime: types.string,
  description: types.string,
})

export const todoModel = types
  .model({
    todoList: types.array(todoListItemModel),
  })
  .computed({
    filteredTodoList({ state }) {
      const list = state().todoList
      const nowDateDayjs = dayjs(dayjs(new Date()).format('YYYY-MM-DD'))
      const gteDiff = list.filter((i) => dayjs(i.date).diff(nowDateDayjs) >= 0)
      const ltDiff = list.filter((i) => dayjs(i.date).diff(nowDateDayjs) < 0)

      const gteDiffSorted = gteDiff.sort((a, b) => {
        return dayjs(b.date).diff(nowDateDayjs) >
          dayjs(a.date).diff(nowDateDayjs)
          ? -1
          : 1
      })
      const ltDiffSorted = ltDiff.sort((a, b) => {
        return dayjs(a.date).diff(nowDateDayjs) >
          dayjs(b.date).diff(nowDateDayjs)
          ? 1
          : -1
      })

      return [...gteDiffSorted, ...ltDiffSorted]
    },
  })
  .actions({
    addTodoItem({ dispatch, state }, item) {
      const newTodo = [...state().todoList, item]
      dispatch({
        todoList: newTodo,
      })
      localStorage.setItem('todoList', JSON.stringify(newTodo))
    },
    deleteTodoItem({ dispatch, state }, id) {
      let list = state().todoList
      const foundItem = list.findIndex((i) => i.id === id)
      list.splice(foundItem, 1)
      dispatch({
        todoList: list,
      })
      localStorage.setItem('todoList', JSON.stringify(list))
    },
  })
