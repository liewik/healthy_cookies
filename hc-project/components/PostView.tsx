import React, {useCallback} from 'react';
import {PostViewProps} from "../interfaces/Post/PostViewProps";
import {Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Card, Icon} from "react-native-elements";


export const PostView = ({
                             text, title, imgUrl,
                         }: PostViewProps) => {
    const navigation = useNavigation();
    const onPostViewPress = useCallback(
        () => {
            navigation.navigate('post')
        },
        [],
    );

    const onPostLike = useCallback(
        () => {
            console.log('hello')
        },
        [],
    );


    return <TouchableOpacity onPress={onPostViewPress}>
        <Card>
            <Card.Title>{title}</Card.Title>
            <Card.Divider/>
            <Card.Image source={require('../assets/bg_main.png')}/>
            <Text style={{ paddingTop: 10, paddingBottom: 10}} >{text}</Text>
            <Card.Divider/>
            <View style={{ display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity onPress={onPostLike}>
                    <Icon
                        name='like'
                        type='evilicon'
                        color='#517fa4'
                    />
                </TouchableOpacity>
                    <TouchableOpacity onPress={onPostLike}>
                        <Icon
                            name='plus'
                            type='evilicon'
                            color='#517fa4'
                        />
                </TouchableOpacity></View>
        </Card>
    </TouchableOpacity>
}
