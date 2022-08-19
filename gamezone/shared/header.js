import React from "react";
import { View , StyleSheet, Text, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({navigation, title}) => {
    const openMenu = () => {
        navigation.openDrawer();
    }
    return ( 
        <View style={styles.headerMain}>
            <ImageBackground source={require('../assets/game_bg.png')} style={styles.bgImage}>
                <MaterialIcons name="menu" onPress={openMenu} size={30} color="#444" style={styles.icon}/>
                <View style={styles.header}> 
                    <View style={styles.headerTitle}>
                        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
     );
}

const styles = StyleSheet.create({
    headerMain: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
    },
    headerTitle:{
        flexDirection: 'row',
    },
    headerImage:{
        width: 26,
        height: 26,
        marginHorizontal: 10,
    },
    bgImage:{
        flex: 1,
        position: 'relative',
    }
}); 
export default Header;