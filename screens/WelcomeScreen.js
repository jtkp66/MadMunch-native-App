import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to Mad Munch', color: '#03A9F4' },
    { text: 'Use this App to get a job!', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
    render() {
        return (
            <View>
                <Image
          source={require('../assets/IMG_3323.png')} />
            </View>
        );
    }
}

export default WelcomeScreen;
