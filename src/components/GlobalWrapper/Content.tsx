import {IGlobalWrapper} from './GlobalWrapper.types';

export const Content = ({children}: IGlobalWrapper.IView) => (
  <div
    data-testid={`GlobalWrapperContent`}
    className="flex min-h-scree w-[1366px]"
  >
    {children}
  </div>
);
