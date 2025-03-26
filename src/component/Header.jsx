import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FeatherIcon from 'react-native-vector-icons/Feather'

export class Header extends Component {
  render() {
    return (
        <View style={styles.mainContainer}>
        <View style={styles.imageView}>
          {/* <Image source={require('../../Assest/Image/youtubelogo.png')} style={styles.imageStyle} /> */}
        </View>
        <View style={styles.rightView}>
          <TouchableOpacity >
            <FeatherIcon name="cast" size={22} color="black" style={{marginRight : 20}}  testID = "CastIcon"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <IoniconsIcon name="notifications-outline" size={24} color="black" style={styles.iconstyle} testID = "NotificationIcon" />
          </TouchableOpacity>
          <TouchableOpacity testID="search-button">
          <MaterialCommunityIcons name="magnify" size={24} color="black" style={styles.iconstyle}  testID= "SearchIcon"/>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer: {
  
      paddingVertical:"50",
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor : 'white'
    },
    imageView: {
  
  
      overflow: 'hidden'
    },
    imageStyle: {
      width: 120,
      height: 40,
  
  
  
    },
    rightView: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    iconstyle: {
      marginRight: 12
    }
  
  })

export default Header
