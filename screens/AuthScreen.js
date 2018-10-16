import React, { Component } from "react";
import { View, Text, Image, StyleSheet, icon } from "react-native";
import { Card, Header, Divider } from "react-native-elements";

class AuthScreen extends Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: "Our Menu", style: { color: "#fff" } }}
        />
        <Divider style={{ backgroundColor: 'blue' }} />
        <Card>
          {/* <Image source={require('../assets/Header_V2.png')}
                 style={styles.headerStyle}
                /> */}
          <Image
            source={require("../assets/menu2.png")}
            style={styles.menuStyle}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuStyle: {
    width: 329,
    height: 400,
    resizeMode: "stretch",
    marginTop: 20,
    paddingBottom: 30
  },
  headerStyle: {
    width: 325,
    height: 200,
    resizeMode: "contain"
  }
});

export default AuthScreen;


// import React, { Component } from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// class AuthScreen extends Component {
//     render() {
//         return (
//             <View>
//                 <View>
//                 <Image source={require('../assets/Header_V2.png')}
//                   style={styles.menuStyle}
//                 />
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//        flex: 1,
//        backgroundColor: 'white',
//        alignItems: 'center',
//        paddingTop: 10,
//     },
//     menuStyle: {
//         width: 300,
//     height: 300,
//     resizeMode: 'contain',
//     marginTop: 20,
//     paddingBottom: 30,
//       }
// })

// export default AuthScreen;