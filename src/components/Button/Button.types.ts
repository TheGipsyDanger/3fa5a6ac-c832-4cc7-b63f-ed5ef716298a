import {HTMLProps, ButtonHTMLAttributes} from 'react';

export namespace IButton {
  export interface IView extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    className?: HTMLProps<HTMLElement>['className'];
  }
  export interface IModelProps {}
  export interface IModel {}
}
