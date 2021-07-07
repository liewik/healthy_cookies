import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Main} from "../pages/Main";
import {Contacts} from "../pages/Contacts";
import {Post} from "../pages/Post";
import {CreatePost} from "../pages/CreatePost";


const Stack = createStackNavigator()

export default ({}) => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="main"
                component={Main}
                options={{title: 'Main'}}
            />
            <Stack.Screen
                name="contacts"
                component={Contacts}
                options={{title: 'Contacts'}}
            />
            <Stack.Screen
                name="post"
                component={Post}
                options={{title: 'Post'}}
            />
            <Stack.Screen
                name="newPost"
                component={CreatePost}
                options={{title: 'Create Post'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}
