import React, {useCallback} from 'react';
import {FlatList, SafeAreaView, View} from "react-native";
import {PostView} from "../components/PostView";
// @ts-ignore
import { v4 } from 'uuid';
import {Button, Icon} from "react-native-elements";
import { FloatingAction } from "react-native-floating-action";
import {FloatingButtonActions} from "../constants/floating-button-action";
import {useNavigation} from "@react-navigation/native";
import {Header} from "react-native-elements/dist/header/Header";



export const Main = ({}) => {
    const navigation = useNavigation();

    const list = [{
        title: 'Name',
        text: 'lorem loremlorem loremlorem loremvvlorem lorem',
        imgUrl: '',
    }, {
        title: 'Name2',
        text: 'lorem loremlorem loremlorem loremvvlorem lorem',
        imgUrl: '',
    },{
        title: 'Name',
        text: 'lorem loremlorem loremlorem loremvvlorem lorem',
        imgUrl: '',
    }, {
        title: 'Name2',
        text: 'lorem loremlorem loremlorem loremvvlorem lorem',
        imgUrl: '',
    },{
        title: 'Name',
        text: 'lorem loremlorem loremlorem loremvvlorem lorem',
        imgUrl: '',
    }, {
        title: 'Name2',
        text: 'lorem loremlorem loremlorem loremvvlorem lorem',
        imgUrl: '',
    },{
        title: 'Name',
        text: 'lorem loremlorem loremlorem loremvvlorem lorem',
        imgUrl: '',
    }, {
        title: 'Name2',
        text: 'lorem loremlorem loremlorem loremvvlorem lorem',
        imgUrl: '',
    },{
        title: 'Name',
        text: 'lorem loremlorem loremlorem loremvvlorem lorem',
        imgUrl: '',
    }, {
        title: 'Name2',
        text: 'lorem loremlorem loremlorem loremvvlorem lorem',
        imgUrl: '',
    },{
        title: 'Name',
        text: 'lorem loremlorem loremlorem loremvvlorem lorem',
        imgUrl: '',
    }, {
        title: 'Name2',
        text: 'lorem loremlorem loremlorem loremvvlorem lorem',
        imgUrl: '',
    }]

    const onCreatePostPress = useCallback(
        () => {
            navigation.navigate('newPost')
        },
        [],
    );

    return <SafeAreaView>
        <Header
            elevated
            backgroundColor="#5E76FF"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Healthy Food', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <FlatList data={list} renderItem={({ item }) => <PostView key={v4()} text={item.text} imgUrl={item.imgUrl} title={item.title}/>}></FlatList>
        <FloatingAction
            onPressMain={onCreatePostPress}
            showBackground={false}
            position="center"
            distanceToEdge={100}
        />

    </SafeAreaView>
}
