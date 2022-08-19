import React , { useState } from "react";
import { StyleSheet, View , FlatList, TouchableOpacity, Text, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

const Home = ({navigation}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {title: "Review 1", rating: 5, body: "This is a review", key: "1"},
        {title: "Review 2", rating: 4, body: "This is a review", key: "2"},
        {title: "Review 3", rating: 3, body: "This is a review", key: "3"},
    ]);
    const addReviews = (review) => {
        review.key = Math.random().toString();
        setReviews(currentReviews => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    }
    const pressHandler = () => {
        navigation.navigate("ReviewDetails");
    }
    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons name='close' style={{...styles.modalToggle,...styles.modalClose}} size={24} 
                            onPress={()=> setModalOpen(false) }/> 
                        <ReviewForm addReviews={addReviews}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            
            <MaterialIcons name='add' style={styles.modalToggle} size={24} onPress={()=> setModalOpen(true) }/>

            <FlatList 
                data = {reviews}
                renderItem = {({item}) => (
                    <TouchableOpacity onPress={()=> navigation.navigate("ReviewDetails",item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        margin: 10,
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex:1,
    }
});

export default Home;