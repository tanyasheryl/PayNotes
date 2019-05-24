import axios from 'axios';
import { FETCH_USER, FETCH_NOTES } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const addNote = (values, history) => async dispatch => {
  const res = await axios.post('/createNote', values);
  history.push('/notes');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchNotes = () => async dispatch => {
  const res = await axios.get('/createNote');
  dispatch({ type: FETCH_NOTES, payload: res.data });
};

export const editNote = (values, history) => async dispatch => {
  const res = await axios.post('/updateNote', values);
  history.push('/notes');
  dispatch({ type: FETCH_USER, payload: res.data });
};
