import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native' 
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'

import LoginScreen from './src/screens/LoginScreen'
import TabRootNav from './src/navigations/TabRootNav'
import SplashScreen from './src/screens/SplashScreen'

const AppMain = () => {
    const Auth = useSelector(state=> state.Auth)
    const [loading, setloading] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=> {
        AsyncStorage.getItem('username')
        .then((value)=> {
            if(value !== null) {
                dispatch({type: 'LOGIN', payload: value})
                setloading(false)
            } else {
                setloading(false)
            }
        }).catch(err=> {
            
        }).finally(()=> {
            setloading(false)
        })
    },[])

    if(loading) {
        return (
            <SplashScreen />
        )
    }

    return (
        <>
            <NavigationContainer>
                {
                    Auth.isLogin?
                    (
                        <TabRootNav />
                    )
                    :
                    (
                        <LoginScreen />
                    )
                }
            </NavigationContainer>
        </>
    );
};

export default AppMain;
