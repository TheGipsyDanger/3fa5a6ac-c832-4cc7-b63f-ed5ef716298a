import {IGlobalWrapper} from './GlobalWrapper.types';

export const Content = ({children}: IGlobalWrapper.IView) => (
  <div
    data-testid={`GlobalWrapperContent`}
    className="flex min-h-scree bg-red-100 w-[1024px]"
  >
    {children}
  </div>
);
