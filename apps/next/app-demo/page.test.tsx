import { View } from 'react-native';
import { render } from '@testing-library/react';

test('render a View', () => {
  const { baseElement } = render(<View />);

  expect(baseElement).toMatchSnapshot();
});
