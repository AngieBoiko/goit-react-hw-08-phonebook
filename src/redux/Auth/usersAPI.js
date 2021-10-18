import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = token;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};
export const register = createAsyncThunk(
  'auth/registration',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Unfortunately, something go wrong!');
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', { email, password });
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Unfortunately, something go wrong!');
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(`/users/logout`);
    token.unset();
  } catch (error) {
    toast.error('Unfortunately, something go wrong!');
    return thunkAPI.rejectWithValue(error);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      token.set(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      toast.error('Unfortunately, something go wrong, try again!');
      return thunkAPI.rejectWithValue();
    }
  },
);
