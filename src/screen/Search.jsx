import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import FeatherIcon from 'react-native-vector-icons/Feather'

export class Search extends Component {
  render() {
    
    return (
      <View style={styles.mainContainer}>


        <View style={styles.BoxWrapper}>
          <View style={{ flex: 0.5 , justifyContent : 'center' }}>
            <FeatherIcon name="repeat" size={22} color="black" style={{ marginRight: 20 }} testID="CastIcon" />
          </View>
          <View style={{ flex: 3 , justifyContent: 'center' }}>
            <Text> Testing in react native </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image source={require("../Assests/Image/Thumbanil2.png")} style={{ width: 50, height: 40  , borderRadius : 10}} />
          </View>
        </View>


        <View style={styles.BoxWrapper}>
          <View style={{ flex: 0.5 , justifyContent : 'center' }}>
            <FeatherIcon name="repeat" size={22} color="black" style={{ marginRight: 20 }} testID="CastIcon" />
          </View>
          <View style={{ flex: 3 , justifyContent: 'center' }}>
            <Text> Testing in react native </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image source={require("../Assests/Image/Thumbanil2.png")} style={{ width: 50, height: 40  , borderRadius : 10}} />
          </View>
        </View>

        <View style={styles.BoxWrapper}>
          <View style={{ flex: 0.5 , justifyContent : 'center' }}>
            <FeatherIcon name="repeat" size={22} color="black" style={{ marginRight: 20 }} testID="CastIcon" />
          </View>
          <View style={{ flex: 3 , justifyContent: 'center' }}>
            <Text> Testing in react native </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image source={require("../Assests/Image/Thumbanil2.png")} style={{ width: 50, height: 40  , borderRadius : 10}} />
          </View>
        </View>

        <View style={styles.BoxWrapper}>
          <View style={{ flex: 0.5 , justifyContent : 'center' }}>
            <FeatherIcon name="repeat" size={22} color="black" style={{ marginRight: 20 }} testID="CastIcon" />
          </View>
          <View style={{ flex: 3 , justifyContent: 'center' }}>
            <Text> Testing in react native </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image source={require("../Assests/Image/Thumbanil2.png")} style={{ width: 50, height: 40  , borderRadius : 10}} />
          </View>
        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    
  },
  BoxWrapper: {
   
    margin: 20,
    flexDirection: 'row'
  }
})

export default Search