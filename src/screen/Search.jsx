import React, { Component } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Voice from '@react-native-voice/voice';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voiceText: '', 
      isListening: false, 
    };
  }

  componentDidMount() {
    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    Voice.onSpeechError = this.onSpeechErrorHandler.bind(this);
  }

  componentWillUnmount() {
    Voice.destroy(); // Remove .then() and call it directly
    Voice.removeAllListeners();
  }

  onSpeechStartHandler = () => {
    this.state.isListening = true;  // Directly modify state (not recommended in React)
    this.state.voiceText = '';      // Instead of setState
  };
  
  onSpeechEndHandler = () => {
    this.state.isListening = false;
  };
  
  onSpeechResultsHandler = (event) => {
    if (event.value && event.value.length > 0) {
      this.state.voiceText = event.value[0]; // Modify state directly
    }
  };
  
  onSpeechErrorHandler = (error) => {
    console.log('Voice error:', error);
    this.state.isListening = false;
  };

  onStartButtonPress = async () => {
    try {
      await Voice.start('en-US');
      this.setState({ voiceText: '' }); // Clear previous search text
    } catch (error) {
      console.error('Voice start error:', error);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer} testID='SearchScreen' >
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} testID="BackButton">
            <Ionicons name="chevron-back" size={35} />
          </TouchableOpacity>

          <TextInput
          testID="SearchInput"
            placeholder="Search"
            style={styles.searchInput}
            value={this.state.voiceText} // Display recognized speech
            onChangeText={(text) => this.setState({ voiceText: text })}
          />

          <TouchableOpacity style={styles.micWrapper} onPress={this.onStartButtonPress} testID="MicButton" >
            <MaterialCommunityIcons
              name={this.state.isListening ? 'microphone-off' : 'microphone'}
              size={25}
              style={[
                styles.mic,
                { backgroundColor: this.state.isListening ? '#FF6961' : '#D3D3D3' }, // Change color when recording
              ]}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 12 }}>
          <View style={styles.BoxWrapper}>
            <View style={styles.iconWrapper}>
              <MaterialIcons name="replay" size={32} color="grey" style={styles.replayIcon} testID="CastIcon" />
            </View>
            <View style={styles.textWrapper}>
              <Text> Testing in React Native </Text>
            </View>
            <View style={styles.imageWrapper}>
              <Image source={require("../Assests/Image/Thumbanil2.png")} style={styles.thumbnail} />
              <MaterialCommunityIcons name="arrow-top-left" size={27} color="grey" style={styles.arrowIcon} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    borderRadius: 18,
    backgroundColor: '#D3D3D3',
    paddingHorizontal: 10,
    height: 40,
    marginLeft: 10,
  },
  micWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 17,
    
  },
  mic: {
    padding: 10,
    borderRadius: 22,
  },
  BoxWrapper: {
    margin: 20,
    flexDirection: 'row',
  },
  iconWrapper: {
    flex: 0.6,
    justifyContent: 'center',
  },
  replayIcon: {
    marginRight: 15,
  },
  textWrapper: {
    flex: 3,
    justifyContent: 'center',
  },
  imageWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  thumbnail: {
    width: 50,
    height: 40,
    borderRadius: 7,
  },
  arrowIcon: {
    marginLeft: 15,
  },
});

export default Search;