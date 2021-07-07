import React, {useCallback, useState} from 'react';
import {PostViewProps} from "../interfaces/Post/PostViewProps";
import {Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Badge, Card, Icon} from "react-native-elements";


export const PostView = ({
 text, title, imgUrl,
}: PostViewProps) => {
    let [likes, addLike] = useState(0)

    const navigation = useNavigation();
    const onPostViewPress = useCallback(
        () => {
            navigation.navigate('post')
        },
        [],
    );

    const onPostLike = useCallback(
        () => {
            addLike(++likes);
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
                        size={50}
                        name='like'
                        type='evilicon'
                        color='#517fa4'
                    />
                    <Badge
                        status="primary"
                        containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                        value={likes}
                    />
                </TouchableOpacity>
                    <TouchableOpacity onPress={onPostLike}>
                        <Icon
                            size={50}
                            name='plus'
                            type='evilicon'
                            color='#517fa4'
                        />
                </TouchableOpacity></View>
        </Card>
    </TouchableOpacity>
}
