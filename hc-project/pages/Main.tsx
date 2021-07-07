import React from 'react';
import {FlatList, View} from "react-native";
import {PostView} from "../components/PostView";
// @ts-ignore
import { v4 } from 'uuid';



export const Main = ({}) => {
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

    return <View>
        <FlatList data={list} renderItem={({ item }) => <PostView key={v4()} text={item.text} imgUrl={item.imgUrl} title={item.title}/>}></FlatList>
    </View>
}
