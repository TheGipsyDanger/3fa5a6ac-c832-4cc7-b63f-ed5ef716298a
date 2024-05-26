import {ChangeEvent} from 'react';

export namespace ISearchBar {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    inputValue: string;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
  }
}
