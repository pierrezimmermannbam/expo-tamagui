import { Button } from '@my/ui';
import { render, screen } from '@testing-library/react-native';

test('works fine for rendering components from shared package', () => {
  render(<Button />);

  expect(screen).toMatchSnapshot();
});
