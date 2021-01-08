import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  region: 'Filter By Region',
  countries: [],
};

const reducer = (state: any, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'setRegion':
      console.log(action);
      return {
        ...state,
        region: action.payload,
      };
    case 'setCountries':
      console.log(action);
      return {
        ...state,
        countries: action.payload,
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
