import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

class DeckScreen extends Component {
    render() {
        return (
            <View>
                <Card>
                <Image source={require('../assets/Header_V2.png')}
                 style={styles.headerStyle}
                />
               <Image source={require('../assets/menu2.png')} 
               style={styles.menuStyle}
               />
               </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    menuStyle: {
        width: 400,
    height: 500,
    resizeMode: 'contain',
    marginTop: 20,
    paddingBottom: 30,
      },
      headerStyle: {
          width: 440,
          height: 100,
          resizeMode: 'contain'

      }
})

export default DeckScreen;
