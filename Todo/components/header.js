import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header:{
        height: 100,
        paddingTop: 58,
        backgroundColor: 'coral',
    },
    title:{
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center', 
    }
});