import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Button title='Login'/>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})