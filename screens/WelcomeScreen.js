import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Slides from '../components/Slides';
import { Card, CardSection, Button, SocialIcon, Header, Tile } from 'react-native-elements';

{/* <View>
                <View>
                <Image source={require('../assets/logo.jpg')}
                  style={styles.menuStyle}
                />
                </View>
            </View> */}


const SLIDE_DATA = [
    { text: 'Welcome to Mad Munch', color: '#03A9F4' },
    { text: 'Use this App to get a job!', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
    render() {
        return (
       <View> 
           <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>   
        <Card
  title='HELLO WORLD'
  justifyContent={ 'center' }
  image={require('../assets/logo.jpg')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={{name: 'code'}}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
    <View>
    <SocialIcon
  type='twitter'
/>
<SocialIcon
  type='facebook'
  raised={true}
/>
    </View>
    <View>
    <SocialIcon
  type='instagram'
/>
<Tile
  imageSrc={require('../assets/logo.jpg')}
  title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
  featured
  caption="Some Caption Text"
  justifyContent= { 'center' }
  height={ 300 }
/>
    </View>
    
</Card>
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

export default WelcomeScreen;

