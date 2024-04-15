import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImgBackground from '../components/ImgBackground'
import ProfileForm from '../components/ProfileForm'

export default function Profile() {
  return (
    <View style={styles.container}>
      <ImgBackground >
        <Text>Profile</Text>
        <ProfileForm/>
      </ImgBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#EEF1F2',
        flex:1,
        padding:16,
    },
})