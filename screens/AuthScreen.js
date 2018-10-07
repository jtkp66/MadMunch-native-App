import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class AuthScreen extends Component {
    render() {
        return (
            <View>
                <View>
                <Image source={require('../assets/Header_V2.png')}
                  style={styles.menuStyle}
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: 'white',
       alignItems: 'center',
       paddingTop: 10,
    },
    menuStyle: {
        width: 300,
    height: 300,
    resizeMode: 'contain',
    marginTop: 20,
    paddingBottom: 30,
      }
})

export default AuthScreen;