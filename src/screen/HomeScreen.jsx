import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import Header from '../component/Header';

export class HomeScreen extends Component {


  render() {
    return (
      <SafeAreaView testID='home-screen' >
       
        <Header  />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;