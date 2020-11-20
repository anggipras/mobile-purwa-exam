import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StatusBar
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux';
import {Icon, Input} from 'react-native-elements'

const LoginScreen = () => {
    const dispatch = useDispatch()
    const [datauser, setdatauser] = useState({
        username: ''
    })

    const onInputUsername = (text) => {
        setdatauser({...datauser, username: text})
    }

    const loginPress = async () => {
        try {
            await AsyncStorage.setItem('username', datauser.username)
            dispatch({type: 'LOGIN', payload: datauser.username})
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <StatusBar backgroundColor='tomato' barStyle="light-content" />
            <View style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20}}>
                    <View style={{paddingVertical: 20}}>
                        <Text style={{color: 'tomato', fontSize: 35, paddingVertical: 5, fontWeight: 'bold'}}>TomatoApp</Text>
                        <Icon 
                            type='material-community'
                            name='food'
                            size={75}
                            color='tomato'
                        />
                    </View>
                    <Input 
                        value = {datauser.username}
                        placeholder = {'username'}
                        leftIcon = {{type: 'feather', name: 'user', color: 'tomato'}}
                        onChangeText = {onInputUsername}
                    />
                    <View style={{width: '100%', paddingTop: 20}}>
                        <Button 
                            title='Enter'
                            onPress={loginPress}
                            color='tomato'
                        />
                    </View>
                </View>
            </View>
        </>
    )
}

export default LoginScreen