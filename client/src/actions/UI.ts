import { ActionTypes } from './types';

export const switchSidebar = () => {
  return {
    type: ActionTypes.showSidebar,
    payload: null
  };
};
