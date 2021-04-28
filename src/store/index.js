import { types } from '@mozaikjs/core'
import loggerPlugin from '@mozaikjs/logger'
import { todoModel, initialTodoModel } from './modules/todo/index'
import { appModel, initialAppModel } from './modules/app/index'

const rootModel = types
  .model({
    app: appModel,
    todo: todoModel,
  })
  .plugins(loggerPlugin())

const store = rootModel.create({
  app: initialAppModel,
  todo: initialTodoModel,
})

export default store
