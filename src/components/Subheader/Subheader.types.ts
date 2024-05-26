export interface IData {
  id: string;
  label: string;
  status: boolean;
  type: string;
}

export namespace ISubheader {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    data: IData[];
    handleClick: (id: string, type: string) => void;
  }
}
