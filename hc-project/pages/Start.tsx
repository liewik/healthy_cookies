import React, {useCallback, useContext} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, ImageBackground, View, Button, Image} from 'react-native';
import {StartPageProps} from "../interfaces/StartPage/StartPageProps";


export default ({goToMain}: StartPageProps) => {

    const onPressLearnMore = useCallback(() => Alert.alert('hello', 'Enter to the Healthy Food?', [
        {
            text: 'Yes',
            onPress: goToMain,
        }, {
            text: 'No',
            onPress: (value) => console.log(value),
        },
    ]), []);

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../assets/bg_main.png')} style={styles.image}>
                <View style={{ flex: 1, justifyContent: 'center' }}>


                    <View style={{ display: "flex", alignItems: 'center' }}>

                        <Image style={styles.logo} source={require('../assets/logo_main.png')}/>
                    </View>

                    {/*  <Button
                        onPress={onPressLearnMore}
                        title="Start"
                        accessibilityLabel="Learn more about this purple button"
                    />*/}
                    <View style={{ display: "flex", alignItems: 'center' }}>

                        <Button
                            onPress={onPressLearnMore}
                            title="Start"
                            color="#843333"
                        />
                    </View>
                </View>

            </ImageBackground>
        </SafeAreaView>

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

    logo: {
        width: 300,
        height: 300,
    },
    buttonStyles: {
        backgroundColor: '#0fc7c9',
    }
});
