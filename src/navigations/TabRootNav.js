import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeScreen from './../screens/HomeScreen'
import StackRootNav from './../navigations/StackRootNav'
import { Icon } from 'react-native-elements';

const TabRoot = createBottomTabNavigator()

const TabRootNav = () => {
    
    return (
        <TabRoot.Navigator
            screenOptions={({route})=>({
                tabBarIcon: ({focused, color, size})=> {
                    let iconName;
                    let type;
                    if (route.name === 'home') {
                        iconName = focused? 'home': 'home';
                        type = 'entypo'
                    } else if (route.name === 'stackroot') {
                        iconName = focused ? 'local-restaurant' : 'local-restaurant';
                        type = 'material'
                    }
                    return <Icon name={iconName} type={type} size={size} color={color} />;
                }
            })}
            tabBarOptions={{
                inactiveTintColor: 'gray',
                activeTintColor: 'tomato',
                showLabel: false
            }}
        >
            <TabRoot.Screen name='home' component={HomeScreen} />
            <TabRoot.Screen name='stackroot' component={StackRootNav} />
        </TabRoot.Navigator>
    )
}

export default TabRootNav