import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Divider } from 'react-native-paper'
import Heading from './Heading'
import AppTextInput from './AppTextInput'

export default function ProfileForm() {
  return (
    <View style={styles.container}>
        <Text>ProfileForm</Text>
        <View style={styles.imgContainer}>
            <Avatar.Image style={styles.icon} size={64} source={require('../assets/images/logo-new.png')} />
        </View>
        <Heading title={'Basic Information'} />
        <AppTextInput label={'Name'} value={''} onChangeText={''}/>
        <AppTextInput label={'Email'} value={''} onChangeText={''}/>
        <AppTextInput label={'D.O.B'} value={''} onChangeText={''}/>
        <AppTextInput label={'Gender'} value={''} onChangeText={''}/>
        <AppTextInput label={'Password'} value={''} onChangeText={''}/>
        <AppTextInput label={'Confirm Password'} value={''} onChangeText={''}/>

        <Heading title={'Contact Information'} />
        <Divider/>
        <AppTextInput label={'Name'} value={''} onChangeText={''}/>
        <AppTextInput label={'Name'} value={''} onChangeText={''}/>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 27,
        backgroundColor: '#fff',
        borderRadius:5,
        gap:8,
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    imgContainer: {
        alignItems: 'center',
    },
})