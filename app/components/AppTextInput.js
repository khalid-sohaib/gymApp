import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function AppTextInput({label, value, onChangeText}) {
  return (
    <TextInput
        mode='outlined'
        label={label}
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
    />
  )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
    }
})