/* eslint-disable react/no-unstable-nested-components */
import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stacknavigation from './Stacknavigation';
import Shorts from '../screen/Shorts';
import SubscriptionsScreen from '../screen/SubscriptionsScreen';
import UploadScreen from '../screen/UploadScreen';
import YouScreen from '../screen/YouScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For tab icons

const Tab = createBottomTabNavigator();

export class BottomNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            let testID;

            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                testID = 'homeIcon';
                break;
              case 'Shorts':
                iconName = 'play-circle-outline';
                testID = 'shortsIcon';
                break;
              case 'Subscriptions':
                iconName = 'albums-outline';
                testID = 'subscriptionsIcon';
                break;
              case 'Upload':
                iconName = 'cloud-upload-outline';
                testID = 'uploadIcon';
                break;
              case 'You':
                iconName = 'person-outline';
                testID = 'profileIcon';
                break;
              default:
                iconName = 'ellipse-outline';
                testID = 'defaultIcon';
            }

            return (
              <View testID={testID} accessibilityLabel={testID}>
                <Ionicons name={iconName} size={size} color={color} />
              </View>
            );
          },
          headerShown: false,
          tabBarInactiveTintColor: 'grey',
        })}
      >
        <Tab.Screen name="Home" component={Stacknavigation} options={{ tabBarTestID: 'stackTabButton' }} />
        <Tab.Screen name="Shorts" component={Shorts} options={{ tabBarAccessibilityLabel: 'ShortsTab'  }} />
        <Tab.Screen name="Upload" component={UploadScreen} options={{ tabBarAccessibilityLabel: 'uploadTab'  }} />
        <Tab.Screen name="Subscriptions" component={SubscriptionsScreen} options={{ tabBarAccessibilityLabel: 'subscriptionButton' }} />
        <Tab.Screen name="You" component={YouScreen} options={{ tabBarAccessibilityLabel: 'ProfileTab' }} />
      </Tab.Navigator>
    );
  }
}

export default BottomNavigation;