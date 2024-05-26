import {useAppDispatch, useAppSelector} from './../../utils/redux/index';
import {searchSetQuery} from '@/redux/actions';
import {ISearchBar} from './SearchBar.types';
import {ChangeEvent, useState} from 'react';

export const useSearchBar = (
  props: ISearchBar.IModelProps
): ISearchBar.IModel => {
  const dispatch = useAppDispatch();

  const {query} = useAppSelector(state => state.Search);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchSetQuery({query: event.target.value}));
  };

  const onSubmit = () => {};

  return {
    onSubmit,
    inputValue: query,
    handleInputChange,
  };
};
