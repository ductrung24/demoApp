import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    width : number,
    height : number
}

const SpaceComponent = (props:Props) => {
  return (
    <View style={{
        width:props.width,
        height:props.height
    }}/>
  )
}

export default SpaceComponent

const styles = StyleSheet.create({})