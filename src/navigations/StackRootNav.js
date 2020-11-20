import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import DetailScreen from './../screens/DetailScreen'

const StackRoot = createStackNavigator()

const StackRootNav = () => {
    
    return (
        <StackRoot.Navigator headerMode='none' initialRouteName='logout'>
            <StackRoot.Screen name='home' component={HomeScreen} />
            <StackRoot.Screen name='detail' component={DetailScreen} />
        </StackRoot.Navigator>
    )
}

export default StackRootNav