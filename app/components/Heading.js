import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Heading({title}) {
  return (
    <Text style={styles.heading}>{title}</Text>

  )
}

const styles = StyleSheet.create({
    heading: {
        color: '#FA2D5E',
        fontWeight: '600',
        fontSize: 12,
        fontFamily: 'Roboto',
        // alignItems: 'flex-start',
        // textAlign:'flex-start',
        // justifyContent: 'flex-start',
      },
})