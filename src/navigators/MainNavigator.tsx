import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';


// main nằm trong StackNavigator và quản lí các BottomTabNavigator
const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='TabNavigator' component={TabNavigator} />
        </Stack.Navigator>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})