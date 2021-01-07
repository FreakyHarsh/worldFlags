import React, { createContext, useContext, useReducer } from 'react';
import { Context } from 'vm';

const initialState = {
  region: '',
};

const reducer = (state: any, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'setRegion':
      return {
        ...state,
        region: action.payload,
      };
    default:
      return state;
  }
};
const Context = createContext({
  state: {} as any,
  dispatch: (_: { type: string; payload?: any }) => {},
});

export const GlobalWrapper: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}> {children} </Context.Provider>;
};

export const useStore = () => useContext(Context);
