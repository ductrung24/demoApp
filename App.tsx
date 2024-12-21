import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from './src/screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {
  // app dùng để điều hướng sau 1,5s thì chuyển qua màn đăng nhập
  const [isShowSplash, setIsShowSplash] = React.useState(true);

  // dùng tạm để lưu trữ token
  const [assetToken, setAssetToken] = React.useState(''); 
  // ta sử dụng useAsyncStorage để lưu trữ token
  const {getItem , setItem} = useAsyncStorage('assetToken');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };

  }, []);

  useEffect(() => {
    checkLogin();
  }, []);
  const checkLogin = async () => {
    // lấy về token từ asyncStorage
     const token = await getItem();
     console.log(token);
     // nếu token tồn tại thì chuyển qua mainScreen
     token && setAssetToken(token);
  }
  return (
    // nếu isShowSplash = true thì hiển thị SplashScreen, ngược lại hiển thị AuthNavigator
    <>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={'transparent'}
        translucent
      />
      {
        isShowSplash ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            {
              assetToken ? <MainNavigator/> : <AuthNavigator/>
            }
          </NavigationContainer>)
      }
    </>
  )

}

export default App

const styles = StyleSheet.create({})