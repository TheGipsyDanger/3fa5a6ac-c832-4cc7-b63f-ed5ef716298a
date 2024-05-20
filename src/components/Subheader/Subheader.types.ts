export interface IData {
  id: string;
  label: string;
  status: boolean;
}

export namespace ISubheader {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    data: IData[];
    handleClick: (id: string) => void;
  }
}
