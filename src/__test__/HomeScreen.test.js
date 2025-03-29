import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';

// Mock useNavigation and useRoute
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
  useRoute: () => ({
    params: {}, // Mock any route params here
  }),
}));

describe("HomeScreen Component", () => {
  it("renders the HomeScreen without crashing", () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );
    expect(getByTestId("home-screen")).toBeTruthy();
  });

  it("renders the Header component", () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );
    expect(getByTestId("header-component")).toBeTruthy();
  });

  it("renders the Body component", () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );
    expect(getByTestId("body-component")).toBeTruthy();
  });

  it("should have a SafeAreaView as the root component", () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );
    expect(getByTestId("home-screen").type).toBe("RCTSafeAreaView");
  });
});