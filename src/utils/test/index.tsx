import store from '@/redux/store';
import {Provider} from 'react-redux';
import {withChildren} from '@/utils/globals';

// Cria um render customizado que inclui o MockedProvider
export const WrapperMock = ({children}: withChildren) => (
  <Provider store={store}>{children}</Provider>
);
