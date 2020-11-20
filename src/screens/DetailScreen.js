import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableWithoutFeedback
} from 'react-native'
import { Icon } from 'react-native-elements';

const DetailScreen = ({navigation,route}) => {
    const {name, featured_image, cuisines, timings, average_cost_for_two, user_rating, location} = route.params.restauData.restaurant

    return (
        <View style={{flex: 1}}>
            <View style={{backgroundColor: 'tomato', height: 50, width: '100%', flexDirection: 'row'}}>
                    <TouchableWithoutFeedback onPress={()=>navigation.goBack()}>
                        <View style={{alignSelf: 'flex-start', marginLeft: 10, marginVertical: 10, backgroundColor: 'rgba(161, 153, 135, 0.6)', borderRadius: 70}}>
                            <Icon 
                                name='arrowleft'
                                type='antdesign'
                                color='white'
                                size={35}
                                style={{fontWeight: 'bold'}}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 10, marginLeft: 10, color: 'white'}}>{name}</Text>
            </View>
            <ImageBackground
                source={{
                    uri: featured_image !== ''? featured_image : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjuD7w-B2jFVFAf0mgjAB6Def_LbTBZKLlw&usqp=CAU`
                }}
                style={{flex: 1}}
            />
            <View style={{flex: 2, paddingHorizontal: 10}}>
                <Text style={{fontSize: 20, color: 'black', marginVertical: 5}}>Rating  : {user_rating.aggregate_rating} </Text>
                <Text style={{fontSize: 20, color: 'black', marginVertical: 5}}>Address : {location.address} </Text>
                <Text style={{fontSize: 20, color: 'black', marginVertical: 5}}>Cuisines : {cuisines} </Text>
                <Text style={{fontSize: 20, color: 'black', marginVertical: 5}}>Open : {timings} </Text>
                <Text style={{fontSize: 20, color: 'black', marginVertical: 5}}>Cost for 2 : {average_cost_for_two} </Text>
            </View>
        </View>
    )
}

export default DetailScreen