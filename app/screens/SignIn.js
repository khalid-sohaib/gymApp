import { StyleSheet,  View } from 'react-native';
import React from 'react';
import ImgBackground from '../components/ImgBackground';
import SignInForm from '../components/SignInForm';

export default function SignIn() {
  return (
    <ImgBackground imageUrl = { require('../assets/images/picture.png') } >
      <View style={styles.container}>
        <SignInForm/>
      </View>
    </ImgBackground >
  )
}
const styles = StyleSheet.create({
    container: {
      padding:35
    }
  });