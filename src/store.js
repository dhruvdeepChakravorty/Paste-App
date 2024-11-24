import { configureStore } from '@reduxjs/toolkit'
import pastesSlice from './Redux/PasteSlice'

export const store = configureStore({
  reducer: {
    pastes: pastesSlice,
  },
})