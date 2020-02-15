import { ActionTypes } from '../actions/types';

export const showSidebar = (
  state: boolean | null = null,
  action: { type: ActionTypes.showSidebar }
) => {
  switch (action.type) {
    case ActionTypes.showSidebar:
      return !state;
    default:
      return state;
  }
};
