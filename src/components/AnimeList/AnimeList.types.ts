import {GetAnimesPerPageQuery} from '@/__gql__/graphql';
import {ApolloError} from '@apollo/client';
export namespace IAnimeList {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    data: GetAnimesPerPageQuery['Page'] | undefined;
    loading: boolean;
    error: ApolloError | undefined;
  }
}
