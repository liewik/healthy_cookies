import { StatusBar } from 'expo-status-bar';
import React, {useCallback} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, ImageBackground, View} from 'react-native';
import { Button, Image } from 'react-native-elements';
import {SafeAreaProvider} from "react-native-safe-area-context";

export default () => {
    const onPressLearnMore = useCallback(() => Alert.alert('hello', 'main message', [
        {
            text: 'OK',
            onPress: (value) => console.log(value),
        }, {
            text: 'NO',
            onPress: (value) => console.log(value),
        },
    ]), []);

    return (
        <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('./assets/bg_main.png')} style={styles.image}>

                    <Image style={{ width: 400, height: 400 }} source={require('./assets/logo_main.png')}/>


                    <Button
                        style={styles.buttonStyles}
                        onPress={onPressLearnMore}
                        title="Start"
                        accessibilityLabel="Learn more about this purple button"
                         />

            </ImageBackground>
        </SafeAreaView>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
    image: {
        flex: 1,
        resizeMode: "cover",

    },

    logoContainer: {
        justifyContent: "center",
        alignItems: 'center',
    },

    logo: {
        width: 50,
        height: 50,
    },
    buttonStyles: {
      backgroundColor: '#0fc7c9',
    }
});
