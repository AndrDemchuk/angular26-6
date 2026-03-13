import { createReducer, on } from '@ngrx/store';
import { AddBook, RemoveBook, AddBookSuccess, AddBookFailure } from './book.actions';
import { Book } from '../models/book';

export const initialState: Book[] = [];
export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state) => { return state }),
  on(AddBookSuccess, (state, { id, title, author }) => [...state, { id, title, author }]),
  on(AddBookFailure, (state, { error }) => {
    console.error(error);
    return state;
  }),
  
  //we`ve gonna add a new book to the state, we`ll return a new array with the spread operator and add the new book to it
  on(RemoveBook, (state, { bookId }) => state.filter((book) => book.id !== bookId)),
  //we`ll filter out the bookId book out of the array and return a new array without it
);
