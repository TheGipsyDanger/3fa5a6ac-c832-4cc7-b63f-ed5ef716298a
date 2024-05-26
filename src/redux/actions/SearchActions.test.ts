import {searchSetQuery, searchSetType} from './SearchActions';

describe('search actions', () => {
  it('should create the correct searchSetQuery action', () => {
    const query = 'Naruto';
    const expectedAction = {
      type: 'Search/setQuery',
      payload: query,
    };

    expect(searchSetQuery({query})).toEqual(expectedAction);
  });

  it('should create the correct searchSetType action', () => {
    const type = 'Anime';
    const expectedAction = {
      type: 'Search/setType',
      payload: type,
    };

    expect(searchSetType({type})).toEqual(expectedAction);
  });
});
