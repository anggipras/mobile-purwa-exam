import React from 'react';
import {
    View,
    Text,
    Button,
    StatusBar,
    SafeAreaView,
    ScrollView,
    Image,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux';

const LogoutScreen = () => {
    const dispatch = useDispatch()

    const onLogoutPress = async () => {
        try {
            await AsyncStorage.removeItem('username')
            dispatch({type: 'LOGOUT'})
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <StatusBar backgroundColor='gray' barStyle="light-content" />
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button 
                    title='logout'
                    onPress={onLogoutPress}
                />
            </View>
        </>
    )
}

export default LogoutScreen