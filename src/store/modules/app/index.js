import { types } from '@mozaikjs/core'

export const initialAppModel = {
  isDisplayedBackButton: false,
}

export const appModel = types
  .model({
    isDisplayedBackButton: types.boolean,
  })
  .actions({
    setIsDisplayedBackButton({ dispatch, state }, value) {
      dispatch({
        isDisplayedBackButton: value,
      })
    },
  })
