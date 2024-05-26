import reducer, {setQuery, setType} from './Search';

describe('Search slice', () => {
  const initialState = {
    query: '',
    type: '',
  };

  it('should handle setQuery', () => {
    const payload = 'Naruto';
    const nextState = reducer(initialState, setQuery(payload));

    expect(nextState.query).toBe(payload);
  });

  it('should handle setType', () => {
    const payload = 'Anime';
    const nextState = reducer(initialState, setType(payload));

    expect(nextState.type).toBe(payload);
  });
});
