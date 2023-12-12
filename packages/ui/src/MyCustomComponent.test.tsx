import { render, screen } from '@testing-library/react-native';
import { View } from 'react-native';

test('custom component', () => {
  render(<View />);

  expect(screen).toMatchSnapshot();
});
