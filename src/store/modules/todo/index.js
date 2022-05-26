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
      const nowDateDayjs = dayjs(dayjs(new Date()).format())
      const gteDiff = list.filter((i) => dayjs(i.date).diff(nowDateDayjs) > 0)
      const ltDiff = list.filter((i) => dayjs(i.date).diff(nowDateDayjs) < 0)
      const gteDiffSorted = gteDiff.sort((a, b) => {
        console.log(a, b);
        const aTime = (a.fromTime || []).split(':')
        const bTime = (b.fromTime || []).split(':')
        let fullADate = null
        let fullBDate = null
        aTime.length === 2 &&
          (fullADate = dayjs(a.date).hour(aTime[0]).minute(aTime[1]))
        bTime.length === 2 &&
          (fullBDate = dayjs(b.date).hour(bTime[0]).minute(bTime[1]))
        console.log(aTime, bTime, 'aTime')
        return dayjs(dayjs(fullBDate).format()).diff(nowDateDayjs) >
          dayjs(fullADate).diff(nowDateDayjs)
          ? 1
          : -1
      })
      const ltDiffSorted = ltDiff.sort((a, b) => {
        return dayjs(a.date).diff(nowDateDayjs) >
          dayjs(b.date).diff(nowDateDayjs)
          ? -1
          : 1
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
