import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import LogoutScreen from '../screens/LogoutScreen'
import DetailScreen from './../screens/DetailScreen'

const StackRoot = createStackNavigator()

const StackRootNav = () => {
    
    return (
        <StackRoot.Navigator headerMode='none' initialRouteName='logout'>
            <StackRoot.Screen name='logout' component={LogoutScreen} />
            <StackRoot.Screen name='detail' component={DetailScreen} />
        </StackRoot.Navigator>
    )
}

export default StackRootNav