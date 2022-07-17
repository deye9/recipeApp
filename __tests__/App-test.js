/**
 * @format
 */

import 'react-native-gesture-handler';
import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import {NavigationContainer} from '@react-navigation/native';
import DrawerContainer from '../src/navigation/DrawerContainer';
import {render, screen, fireEvent} from '@testing-library/react-native';

it('renders correctly', () => {
  renderer.create(<App />);
});

describe('Testing react navigation', () => {
  test('screen contains a button linking to the Home page', async () => {
    const component = (
      <NavigationContainer>
        <DrawerContainer />
      </NavigationContainer>
    );

    render(component);
    const button = await screen.findByText('HOME');

    expect(button).toBeTruthy();
  });

  test('screen contains a button linking to the Categories page', async () => {
    const component = (
      <NavigationContainer>
        <DrawerContainer />
      </NavigationContainer>
    );

    render(component);
    const button = await screen.findByText('CATEGORIES');

    expect(button).toBeTruthy();
  });

  test('screen contains a button linking to the Search page', async () => {
    const component = (
      <NavigationContainer>
        <DrawerContainer />
      </NavigationContainer>
    );

    render(component);
    const button = await screen.findByText('SEARCH');

    expect(button).toBeTruthy();
  });

  // test('clicking on the button takes you to the home screen', async () => {
  //   const component = (
  //     <NavigationContainer>
  //       <DrawerContainer />
  //     </NavigationContainer>
  //   );

  //   render(component);
  //   const oldScreen = screen.queryByText('Welcome!');
  //   const button = await screen.findByText('Go to notifications');

  //   expect(oldScreen).toBeTruthy();

  //   fireEvent(button, 'press');
  //   const newScreen = await screen.findByText('This is the notifications screen');

  //   expect(newScreen).toBeTruthy();
  // });
});
