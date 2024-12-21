import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';


// Các BottomTabNavigator được quản lí tại đây
const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='HomeScreen' component={HomeScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({})