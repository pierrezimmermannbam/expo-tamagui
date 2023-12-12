import { render, screen } from '@testing-library/react-native';
import { HomeScreen } from './screen';
import { NavigationContainer } from '@react-navigation/native';
import { PortalProvider } from '@my/ui';

test('home screen', () => {
  render(
    <PortalProvider>
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </PortalProvider>
  );

  expect(screen).toMatchSnapshot();
});
