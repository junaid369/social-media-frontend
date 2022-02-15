import {createSlice } from '@reduxjs/toolkit'

const postmanagment = createSlice({
  name: 'post',
  initialState: {
    post:{
      file:null,
      description:null,
      time :null,
    }

  },
  reducers: {
    postAction: (state,action) => {
      state.post=({...action.payload})

    },

  }
})

export const { postAction } = postmanagment.actions

export default postmanagment.reducer
