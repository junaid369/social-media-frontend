import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:{
      name:'Muhammed Junaid',
      email:null,
      token :null,
    }

  },
  reducers: {
    loginAction: (state,action) => {
      state.user=({...action.payload})

    },
    // logoutAction: state => {
    //   state.user = null
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("user");
    //   window.location.reload()

    // }
  }
})

export const { loginAction } = userSlice.actions

export default userSlice.reducer
