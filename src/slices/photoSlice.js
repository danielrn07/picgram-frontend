import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import photoService from '../services/photoService'

const initialState = {
  photos: [],
  photo: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

// Publish an user photo
export const publishPhoto = createAsyncThunk('photo/publish', async (photo, thunkAPI) => {
  const token = thunkAPI.getState().auth.user.token

  const data = await photoService.publishPhoto(photo, token)

  // Check for errors
  if (data.errors) {
    return thunkAPI.rejectWithValue(data.errors[0])
  }

  return data
})

// Get user photos
export const getUserPhotos = createAsyncThunk('photo/userPhotos', async (id, thunkAPI) => {
  const token = thunkAPI.getState().auth.user.token

  const data = await photoService.getUserPhotos(id, token)

  return data
})

// Delete a foto
export const deletePhoto = createAsyncThunk(
  'photo/delete',
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token

    const data = await photoService.deletePhoto(id, token)

    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(publishPhoto.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(publishPhoto.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null
        state.photo = action.payload
        state.photos.unshift(state.photo)
        state.message = 'Foto publicada com sucesso.'
      })
      .addCase(publishPhoto.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.photo = {}
      })
      .addCase(getUserPhotos.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getUserPhotos.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null
        state.photos = action.payload
      })      
      .addCase(deletePhoto.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deletePhoto.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null
        state.photos = state.photos.filter((photo) => {
          return photo._id !== action.payload.id
        })
        state.message = action.payload.message
      })
      .addCase(deletePhoto.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.photo = {}
      })
  },
})

export const { resetMessage } = photoSlice.actions
export default photoSlice.reducer
