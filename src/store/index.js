import { types } from '@mozaikjs/core'
import loggerPlugin from '@mozaikjs/logger'
import todoModel from './modules/todo/index'
import appModel from './modules/app/index'

const initialTodoModel = {
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
  ]
}

const initialAppModel = {
  isDisplayedBackButton: false,
}

const rootModel = types.model({
  app: appModel,
  todo: todoModel,
}).plugins(loggerPlugin())

const store = rootModel.create({
  app: initialAppModel,
  todo: initialTodoModel
})

export default store
























