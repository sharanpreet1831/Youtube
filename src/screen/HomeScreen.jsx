import React, { Component } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Header from '../component/Header';
import Body from '../component/Body';


export class HomeScreen extends Component {


  render() {
    return (
      <SafeAreaView testID='home-screen' style={{ flex: 1 }} >
        <View style={{ flex: 1 }}>
          <Header />
        </View>
       <View style ={{flex : 12}} testID="body-component">
       <Body />
       </View>
      </SafeAreaView>
    );
  }
}


export default HomeScreen;