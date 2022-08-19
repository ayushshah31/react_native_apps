import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({item , deleteTodo}) => {
    return ( 
        <TouchableOpacity onPress={()=> deleteTodo(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={18} color="#333" />
                <Text style={styles.itemText}>{item.text}</Text> 
            </View>
        </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    item:{
        borderStyle: 'dashed',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemText:{
        marginLeft: 10,
    }
});

export default TodoItem;