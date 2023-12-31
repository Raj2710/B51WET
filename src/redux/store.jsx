import { configureStore } from '@reduxjs/toolkit'
import BlogSliceReducer from './BlogSlice'
export default configureStore({
  reducer: {
    blogs:BlogSliceReducer
  }
})