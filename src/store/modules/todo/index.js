import { types } from '@mozaikjs/core'
import dayjs from 'dayjs'

export const initialTodoModel = {
  todoList: [
    {
      id: 1,
      title: 'Design Meeting',
      date: '2021-03-04',
      fromTime: '10:00',
      toTime: '11:30',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut deserunt exercitationem placeat tempora ut.',
    },
    {
      id: 2,
      title: 'Design Meeting',
      date: '2021-03-12',
      fromTime: '10:00',
      toTime: '11:30',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut deserunt exercitationem placeat tempora ut.description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut deserunt exercitationem placeat tempora ut.',
    },
  ],
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
      dispatch({
        todoList: [...state().todoList, item],
      })
    },
    deleteTodoItem({ dispatch, state }, index) {
      let list = state().todoList
      list.splice(index, 1)
      dispatch({
        todoList: list,
      })
    },
  })
