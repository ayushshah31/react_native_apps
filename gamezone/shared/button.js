import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const FlatButton = ({ text, onPress }) => {
    return ( 
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#f01d71",
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        // borderWidth: 1,
        // borderColor: "#ddd"
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
});

export default FlatButton;