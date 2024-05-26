import {createCustomAction} from 'typesafe-actions';

export const searchSetQuery = createCustomAction(
  'Search/setQuery',
  ({query}: {query: string}) => ({payload: query})
);

export const searchSetType = createCustomAction(
  'Search/setType',
  ({type}: {type: string}) => ({payload: type})
);
