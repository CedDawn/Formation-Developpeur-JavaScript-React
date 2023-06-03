import { combineReducers, createSlice, createStore } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isEditing: false,
    isLogged: false,
  },
  reducers: {
    editing: (state) => {
      state.isEditing = !state.isEditing
    },
    logging: (state, action) => {
      state.isLogged = action.payload
    },
  },
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    token: '',
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
})

const reducer = combineReducers({
  app: appSlice.reducer,
  user: userSlice.reducer,
})

export const store = createStore(reducer)
