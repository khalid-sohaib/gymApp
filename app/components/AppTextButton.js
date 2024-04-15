import { StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

export default function AppTextButton({title, onPress, theme}) {
  return (
    <Button 
        theme={theme}
        style={ styles.button}
        icon="" 
        mode="text" 
        onPress={onPress}>
        {title}
    </Button>
  )
}

const styles = StyleSheet.create({
    button: {
        borderRadius:4,
        alignItems: 'flex-end',
        
    },
})