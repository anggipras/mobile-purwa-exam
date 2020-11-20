import React from 'react';
import {
    View,
} from 'react-native';

const MenuSelect = (props) => (
    <View style={{
        backgroundColor: 'white', 
        flexDirection: 'row', 
        flexWrap: 'wrap',
    }}>
        {props.children}
    </View>
)

export default MenuSelect