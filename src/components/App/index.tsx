'use client';

import {IApp} from '@/components/App/App.types';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {GlobalWrapper} from '@/components/GlobalWrapper';
import {Subheader} from '@/components/Subheader';
import {apolloClient} from '@/utils/apollo-client';
import {ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import store from '@/redux/store';

export const App = ({children}: IApp.IView) => (
  <div data-testid={`App`}>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Header />
        <Subheader />
        <GlobalWrapper.Container>
          <GlobalWrapper.Content>{children}</GlobalWrapper.Content>
        </GlobalWrapper.Container>
        <Footer />
      </ApolloProvider>
    </Provider>
  </div>
);
