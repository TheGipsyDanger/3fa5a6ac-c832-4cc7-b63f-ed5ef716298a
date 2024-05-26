import {GetAnimesPerPageQuery} from '@/__gql__/graphql';
import {ApolloError} from '@apollo/client';
export namespace IAnimeList {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    page: GetAnimesPerPageQuery['Page'] | undefined;
    media: NonNullable<NonNullable<GetAnimesPerPageQuery['Page']>['media']>;
    loading: boolean;
    error: ApolloError | string;
    showMore: (page: number) => void;
  }
}
