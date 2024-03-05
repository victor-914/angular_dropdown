// menu.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as MenuActions from './menu.action';

export interface MenuState {
  isOpen: boolean;
}

export const initialState: MenuState = {
  isOpen: false,
};

export const menuReducer = createReducer(
  initialState,
  on(MenuActions.toggleMenu, (state) => ({
    ...state,
    isOpen: state.isOpen === undefined ? false : !state.isOpen,
  }))
);
