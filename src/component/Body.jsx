import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export class Body extends Component {
  renderCategoryButtons = () => {
    const categories = ["All", "SUVs", "Apple", "Music", "News", "Mixes", "Samsung", "JavaScript", "Live", "Sedans", "Trucks"];
    
    return (
      <ScrollView horizontal={true} >
        <TouchableOpacity style={styles.slideButtonWrapper} testID='Drawerbutton'>
          <Ionicons name="compass-outline" size={32} />
        </TouchableOpacity>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.slideButtonWrapper} testID={`category-${category}`} >
            <Text style={styles.slideButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  renderVideoItem = () => {
    return (
      <View style={styles.videoContainer} >
        <Image testID='VideoThumbnail' source={require('../Assests/Image/RNCourse.jpeg')} style={styles.imageStyle}  />
        <View style={styles.videoDetailsContainer}>
          <Image source={require("../Assests/Image/channelProfile.jpeg")} style={styles.channelLogo}  testID='ChannelLogo' />
          <View style={styles.textContainer}>
            <Text style={styles.videoTitle} testID='VideoDescription'>React Native Full Course for Beginners | Build Your First Mobile App in 4 Hours!</Text>
            <Text style={styles.channelDescription} testID='ChannelName'>Sheryians Coding School • 163K views • 2 months ago</Text>
          </View>
          <View style = {styles.sideButtonMenu}>
          <Entypo name="dots-three-vertical" size={22} style={styles.menuIcon} testID='sideButton' />
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.mainContainer} testID='mainview'>
        <View style={styles.slideItem} testID='slideView'>
          {this.renderCategoryButtons()}
        </View>
        <ScrollView testID='mainScrollView'>
          {[...Array(10)].map((_, index) => (
            <React.Fragment key={index}>{this.renderVideoItem()}</React.Fragment>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 12,
  },
  slideItem: {
    paddingVertical: 10,
  },
  slideButtonWrapper: {
    paddingHorizontal: 12,
    backgroundColor: "#D9D9D9",
    margin: 5,
    borderRadius: 7,
    justifyContent: 'center',
    height: 30,
  },
  slideButtonText: {
    fontSize: 15,
  },
  videoContainer: {
    flex: 1,
    overflow: 'hidden',
    marginBottom: 10,
  },
  imageStyle: {
    width: '100%',
    height: 200,
  },
  videoDetailsContainer: {
    flexDirection: 'row',
    marginTop: 7,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  channelLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 7,
    marginLeft: 10,
  },
  videoTitle: {
    fontWeight: '500',
    fontSize: 15,
  },
  channelDescription: {
    fontWeight: '300',
    fontSize: 13,
    color: '#606060',
  },
  sideButtonMenu:{
    
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  menuIcon: {
  
  },
});

export default Body;
