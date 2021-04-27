import { types } from '@mozaikjs/core'

const appModel = types.model({
  isDisplayedBackButton: types.boolean
})
  .actions({
    setIsDisplayedBackButton({ dispatch, state }, value) {
      dispatch({
        isDisplayedBackButton: value
      })
    },
  })


export default appModel