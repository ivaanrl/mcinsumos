import { showSidebar } from './UI';
import { reducer as formReducer, FormReducer } from 'redux-form';
import { combineReducers } from 'redux';

export interface StoreState {
  sidebar: boolean | null;
  form: FormReducer | any; //need to get rid of that any
}

export const rootReducer = combineReducers<StoreState>({
  sidebar: showSidebar,
  form: formReducer
});
