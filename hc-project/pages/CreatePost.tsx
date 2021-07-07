import React from 'react';
import {useForm, Controller} from "react-hook-form";
import { Text, View, Alert } from "react-native";
import {Button, Input} from "react-native-elements";

export const CreatePost = ({}) => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => console.log(data);


    return (
        <View>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="firstName"
                defaultValue=""
            />
            {errors.firstName && <Text>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="lastName"
                defaultValue=""
            />

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    );

}
