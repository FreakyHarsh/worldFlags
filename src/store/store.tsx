import React, { createContext, useContext, useReducer } from 'react';
import { Actions } from '../types/Actions';
import { State } from '../types/State';

const initialState = {
  region: 'Filter By Region',
  countries: [],
  searchInputValue: '',
} as State;

const reducer = (state: State, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case Actions.setRegion:
      return {
        ...state,
        region: action.payload,
      };
    case Actions.setCountries:
      return {
        ...state,
        countries: action.payload,
      };
    case Actions.setSearchInputValue:
      return {
        ...state,
        searchInputValue: action.payload,
      };
    default:
      return state;
  }
};
const Context = createContext({
  state: {} as State,
  dispatch: (_: { type: string; payload?: any }) => {},
});

export const GlobalWrapper: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}> {children} </Context.Provider>;
};

export const useStore = () => useContext(Context);
