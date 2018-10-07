import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Review Jobs',
            headerRight: (
                <Button title='Settings' onPress={() => navigation.navigate('settings')} />
               )
            };
        }
       

    render() {
        return (
            <View>
                <Image
                style={{
                  marginTop: 100,
                  alignSelf: 'stretch',
                  width: 400,
                  height: 400
                }}
                source={require('../assets/logo.jpg')}
              >
                
              </Image>
            </View>
        );
    }
}

export default ReviewScreen;
