import { StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

export default function AppButton({title, onPress}) {
  return (
    <Button 
        style={styles.button}
        icon="" 
        mode="contained" 
        onPress={onPress}>
        {title}
    </Button>
  )
}

const styles = StyleSheet.create({
    button: {
        borderRadius:4,
        
    },
})