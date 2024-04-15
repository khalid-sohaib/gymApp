import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppTextInput from './AppTextInput';
import AppButton from './AppButton';
import AppTextButton from './AppTextButton';

export default function SignInForm() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Sign In</Text>
        <AppTextInput label={'Email'} value={email} onChangeText={()=>setEmail(email)} />
        <AppTextInput label={'Password'} value={password} onChangeText={()=>setPassword(password)} />
        <AppTextButton title={'Forgot password ?'} />
        <AppButton title={'Sign In'} onPress={()=>console.log('Sign In Pressed')} />
        <AppTextButton title={"Don't have account?"} theme={{ colors: { primary: '#000' } }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', 
    padding: 35, 
    justifyContent: 'center', 
    // alignItems: 'center', // Center align content horizontally
    gap:5,
    borderRadius:4,
  },
  heading: {
    color: '#FA2D5E',
    fontWeight: '700',
    fontSize: 21,
    fontFamily: 'Roboto',
  },
});
