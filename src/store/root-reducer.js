import { combineReducers } from '@reduxjs/toolkit';
import { reducer as todoReducer } from '../slices/todo';

export const rootReducer = combineReducers({
    todo: todoReducer
});
