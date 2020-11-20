import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    ImageBackground,
    TouchableWithoutFeedback,
    RefreshControl,
    ScrollView
} from 'react-native'
import Axios from 'axios'
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import MenuSelect from './../components/MenuSelect'

const token = 'ee5c7a59d5aad08f786511d7d86253d6'

const HomeScreen = ({navigation}) => {
    const [rest, setRest] = useState([])
    const [refresh, setrefresh] = useState(false)
    const Auth = useSelector(state=> state.Auth)

    useEffect(()=> {
        fetchdata()
    },[])

    const fetchdata = async () => {
        try {
            const {data} = await Axios.get(`https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating`,{headers: {'user-key': `${token}`}})
            setRest(data.restaurants)
            setrefresh(false)
        } catch (error) {
            console.log(error);
        }
    }

    const onDetailScreen = (item) => {
        navigation.navigate('detail', {restauData: item})
    }

    const onRefreshFlatList = () => {
        setrefresh(true)
        fetchdata()
    }

    // const renderRestaurant = ({item}) => {
    //     return (
    //         <ImageBackground
    //             source={{
    //                 uri: item.restaurant.featured_image !== ''? item.restaurant.featured_image : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjuD7w-B2jFVFAf0mgjAB6Def_LbTBZKLlw&usqp=CAU`
    //             }}
    //             style={styles.containerimageBgstyle}
    //             imageStyle={{borderRadius: 5}}
    //         >
    //             <TouchableWithoutFeedback onPress={()=>onDetailScreen(item)}>
    //                 <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //                     <Text style={{color: 'white', textTransform: 'capitalize'}}>
    //                         {item.restaurant.name}
    //                     </Text>
    //                 </View>
    //             </TouchableWithoutFeedback>
    //         </ImageBackground>
    //     )
    // }

    const menuData = [
        {name: 'credit-card', type: 'entypo', title: 'Credit'},
        {name: 'food-variant', type: 'material-community', title: 'Variant'},
        {name: 'food-fork-drink', type: 'material-community', title: 'Recipe'},
        {name: 'location-pin', type: 'entypo', title: 'Location'},
        {name: 'shopping-cart', type: 'entypo', title: 'Cart'},
        {name: 'pizza', type: 'material-community', title: 'Pizza'},
        {name: 'hamburger', type: 'material-community', title: 'Burger'},
        {name: 'more-horizontal', type: 'feather', title: 'More'},
    ]

    return (
        <>
        <StatusBar backgroundColor='tomato' barStyle="light-content" />
        <View style={{flex: 1}}>
            <View style={{backgroundColor: 'tomato', height: 50, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10}}>
                <View style={{marginRight: 10}}>
                    <Icon name={'ticket-account'} type={'material-community'} size={25} color={'white'} />
                </View>
                <View>
                    <Text style={{fontSize: 15, color: 'white'}}>Hallo, {Auth.username}</Text>
                </View>
            </View>
            <ScrollView refreshControl={<RefreshControl onRefresh={onRefreshFlatList} refreshing={refresh} />} >
                <MenuSelect>
                    {
                        menuData.map((val, index)=> {
                            return (
                                <View key={index} style={styles.menuStyle}>
                                    <View style={{
                                        height: 40,
                                        width: 40,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 20,
                                        borderWidth: 2,
                                        borderColor: 'tomato'
                                    }}>
                                        <Icon name={val.name} type={val.type} size={25} color="tomato"/>
                                    </View>
                                    <Text>
                                        {val.title}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </MenuSelect>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        rest.map((val, index)=> {
                            return (
                                <View key={index} style={{flexBasis: '50%', paddingHorizontal: 10, paddingVertical: 10}}>
                                    <View>
                                        <TouchableWithoutFeedback onPress={()=>onDetailScreen(val)}>
                                            <ImageBackground
                                                source={{
                                                    uri: val.restaurant.featured_image !== ''? val.restaurant.featured_image : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjuD7w-B2jFVFAf0mgjAB6Def_LbTBZKLlw&usqp=CAU`
                                                }}
                                                style={styles.containerimageBgstyle}
                                            />
                                        </TouchableWithoutFeedback>
                                    </View>
                                    <View>
                                        <View style={{flexDirection: 'row'}}>
                                            <Icon name='star' type='antdesign' size={15} color="yellow"/>
                                            <Text>{val.restaurant.user_rating.aggregate_rating}</Text>
                                        </View>
                                        <Text>{val.restaurant.name}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                    {/* <FlatList 
                        data={rest}
                        keyExtractor={item=> `${item.restaurant.id}`}
                        renderItem={renderRestaurant}
                        showsVerticalScrollIndicator={false}
                    /> */}
                </View>
            </ScrollView>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    containerimageBgstyle: {
        height: 200,
        width: '100%',
        marginVertical: 5
    },
    menuStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: "25%",
        height: 80,
        paddingTop: 20
    }
})

export default HomeScreen