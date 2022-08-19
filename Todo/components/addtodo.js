import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button , View } from "react-native";

const AddTodo = ({addTodo}) => {
    const [text, setText] = useState('');
    const changeHandler = (input) => {
        setText(input);
    }
    return ( 
        <View>
            <View style={styles.container}>
                <TextInput styles={styles.input}
                    placeholder="Enter Todo..."
                    onChangeText={changeHandler}
                    />
            </View>
            <Button onPress={()=>addTodo(text)} title="ADD TODO" color="coral"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
    }
})

export default AddTodo;