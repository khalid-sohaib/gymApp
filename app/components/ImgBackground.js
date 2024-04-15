import {  ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';


export default function ImgBackground ({ imageUrl, children })  {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={imageUrl}
          style={styles.image}
        >
          <Avatar.Image style={styles.icon} size={64} source={require('../assets/images/logo-new.png')} />
          {children}
        </ImageBackground>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    icon: {
      backgroundColor: 'transparent',
      position: 'absolute',
      top:40,
      left:14,
      // objectFit: 'cover',


    },
    text: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });