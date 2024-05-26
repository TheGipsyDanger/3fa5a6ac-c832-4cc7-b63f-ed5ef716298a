import React from 'react';
import {render} from '@testing-library/react';
import styled, {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {ThemeProvider, theme} from './theme';

const TestComponent = styled.div`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.default}px;
`;

describe('ThemeProvider', () => {
  it('should render children with theme applied', () => {
    const {getByText} = render(
      <ThemeProvider>
        <TestComponent>Test Theme</TestComponent>
      </ThemeProvider>
    );

    const testElement = getByText('Test Theme');
    expect(testElement).toBeInTheDocument();
    expect(testElement).toHaveStyle(`color: ${theme.colors.black}`);
    expect(testElement).toHaveStyle(`font-size: ${theme.fontSizes.default}px`);
  });
});
