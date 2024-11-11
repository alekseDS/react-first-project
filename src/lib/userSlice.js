import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: undefined,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    logout: () => {
      return initialState
    },
  },
  selectors: {
    selectUser: (state)=> {return state.user}
  }
})

export const { logout, setUser } = userSlice.actions
export const { selectUser } = userSlice.selectors