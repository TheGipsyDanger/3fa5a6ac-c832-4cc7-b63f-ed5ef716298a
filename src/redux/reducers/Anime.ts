import {Page, Media} from './../../__gql__/graphql';
import {IResponseAnimeList} from '@/redux/actions/AnimeActions';
import {createSlice} from '@reduxjs/toolkit';

export interface IAnimeState {
  isLoading: boolean;
  error: string;
  data: IResponseAnimeList['data'];
}

const initialState: IAnimeState = {
  data: {
    Page: {
      media: [] as Media[],
    },
  } as IResponseAnimeList['data'],
  isLoading: false,
  error: '',
};

const Anime = createSlice({
  name: 'Anime',
  initialState,
  reducers: {
    AnimesPageRequest: state => {
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    },
    AnimesPageRequestSuccess: (state, {payload}) => {
      // @ts-ignore
      const media = [...state?.data?.Page?.media, ...payload.Page.media];

      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          Page: {
            ...payload.Page,
            media,
          },
        },
      };
    },
    AnimesPageRequestFailure: (state, {payload}) => {
      return {...state, isLoading: false, error: payload};
    },
  },
});

export const {AnimesPageRequest} = Anime.actions;

export default Anime.reducer;
