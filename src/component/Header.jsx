import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { withRouter } from '../helper/withRouter';


class Header extends Component {
  render() {
    const { navigation } = this.props; 

    return (
      <View style={styles.mainContainer} testID='header-component'>
        <View style={styles.imageView}>
          <Image source={require('../Assests/Image/youtubelogo.png')} style={styles.imageStyle} />
        </View>
        <View style={styles.rightView}>
          <TouchableOpacity testID='cast-icon'>
            <FeatherIcon name="cast" size={22} color="black" style={{ marginRight: 20 }} testID="CastIcon" />
          </TouchableOpacity>
          <TouchableOpacity testID='notification-icon'>
            <IoniconsIcon name="notifications-outline" size={24} color="black" style={styles.iconstyle} testID="NotificationIcon" />
          </TouchableOpacity>
          <TouchableOpacity 
            testID="search-button" 
            onPress={() => navigation.navigate('Search')} 
          >
            <MaterialCommunityIcons name="magnify" size={24} color="black" style={styles.iconstyle} testID="SearchIcon"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// ✅ Wrap Header with withNavigation
export default withRouter(Header);

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  imageView: {
    overflow: 'hidden'
  },
  imageStyle: {
    width: 120,
    height: 40
  },
  rightView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconstyle: {
    marginRight: 12
  }
});