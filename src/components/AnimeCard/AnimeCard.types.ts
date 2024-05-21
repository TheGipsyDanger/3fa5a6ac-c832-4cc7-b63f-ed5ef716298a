import {GetAnimesPerPageQuery} from '@/__gql__/graphql';

export namespace IAnimeCard {
  export interface IView {
    data: NonNullable<
      NonNullable<GetAnimesPerPageQuery['Page']>['media']
    >[number];
  }
  export interface IModelProps {}
  export interface IModel {}
}
