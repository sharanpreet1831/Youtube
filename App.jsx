import React, { Component } from 'react';

import BottomNavigation from './src/Navigation/BottomNaviagtion';
import { NavigationContainer } from '@react-navigation/native';

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    );
  }
}

export default App;