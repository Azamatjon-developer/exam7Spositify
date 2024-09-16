import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../Wishlist/index'

export const store = configureStore({
  reducer: {
    heart: counterSlice,
  },
})
