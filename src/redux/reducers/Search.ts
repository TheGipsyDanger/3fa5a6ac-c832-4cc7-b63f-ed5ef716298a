import {createSlice} from '@reduxjs/toolkit';

interface ISearch {
  query: string;
  type: string;
}

const initialState: ISearch = {
  query: '',
  type: '',
};

const Search = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setQuery: (state, {payload}) => {
      return {...state, query: payload};
    },
    setType: (state, {payload}) => {
      return {...state, type: payload};
    },
  },
});

export const {setQuery, setType} = Search.actions;

export default Search.reducer;
