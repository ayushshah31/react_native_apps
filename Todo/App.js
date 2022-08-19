import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text , View , FlatList, Alert,  TouchableWithoutFeedback, Keyboard} from 'react-native';
import React,{ useState } from 'react';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';
import Sandbox from './components/sandbox';

export default function App() {
    const [todos , setTodos] = useState([
        {text: 'Learn React Native' , key: '1'},
        {text: 'Implement Project' , key: '2'},
        {text: 'try connecting with database prefferably mongoDB' , key: '3'},
    ]);

    const deleteTodo = (key)=>{
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.key != key);
        });
    }

    const addTodo= (text)=>{
        if(text.length > 3){
            setTodos((prevTodos)=>{
                return [
                    {text: text, key: (todos[0].key + 3).toString()},
                    ...prevTodos
                ];
            })
        } else {
            Alert.alert("OOPS!","Todo must be greater than 3 chars",
            [{text: "Understood", onPress: ()=>console.log("Alert closed")}]);
        }
    }
    return (
        <TouchableWithoutFeedback onPress={()=>{
            console.log("Keyboard Dismiss");
            Keyboard.dismiss();
            }}>
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo addTodo={addTodo}/>
                    <View style={styles.list}>
                        <FlatList 
                        data={todos}
                        renderItem={({item}) => <TodoItem item={item} deleteTodo={deleteTodo}/> }/>
                    </View>
                </View>
                <StatusBar style="auto" />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingTop: 100,
        padding: 40,
        flex: 1,
    },
    list: {
        marginTop: 20,
        flex: 1,
    }
});

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View , Button , TextInput , ScrollView , FlatList, TouchableOpacity } from 'react-native';
// import React,{ useState } from 'react';

// export default function App() {
//     const [people , setPeople] = useState([
//         {name: 'Ayush', id: 1},
//         {name: 'abc' , id: 2},
//         {name: 'xyz' , id: 3},
//         {name: 'pqr' , id: 4},
//         {name: 'mno' , id: 5},
//         {name: 'jkl' , id: 6},
//         {name: 'ghi' , id: 7},
//         {name: 'def' , id: 8},
//     ]);
//     // const [name , setName] = useState('Ayush Shah');
//     // const [age,setAge] = useState(20);

//     // const cliclHandler = () => {
//     //     setName('Ayush');
//     // }
//     const pressHandler = (id) => {
//         console.log(id);
//         // It passed the pervious state value to the function
//         setPeople(prevPeople => {
//             return prevPeople.filter(person => person.id != id);
//         })
//     }
//   return (
//     <View style={styles.container}>
//         {/* This will load big list items few at a time */}
//         <FlatList data={people} 
//         key = {people.id}
//             keyExtractor={(item) => item.id}
//             numColumns={2}
//             renderItem={({item}) => {
//                 return(
//                 <TouchableOpacity onPress={()=>{ pressHandler(item.id)}}>
//                     <Text style={styles.item}>{item.name}</Text>
//                 </TouchableOpacity>)
//             }}/>

//         {/* This will load all list items at once 
//             <ScrollView>
//             {
//                 people.map(person => {
//                     return (
//                         <View key={person.key}>
//                             <Text style={styles.item}>{person.name}</Text>
//                         </View>
//                     )
//                 })
//             }
//             </ScrollView> */
//         }

//             {/* <Text>Enter name: </Text>
//             <TextInput style={styles.textInput} 
//                 multiline
//                 placeholder="e.g. Ayush Shah" 
//                 onChangeText={(val)=>setName(val)} />
//             <Text>Enter age: </Text>
//             <TextInput style={styles.textInput} 
//                 placeholder="20"
//                 onChangeText={(val) => setAge(val)}
//                 keyboardType="numeric"/>
//             <Text>{name},{age}</Text>
//         <View style={styles.buttonContainer}>
//             <Button onPress={cliclHandler} title='Update state'/>
//         </View> */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     // marginTop: 50, 
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//     item:{
//         padding: 10,
//         backgroundColor: 'pink',
//         fontSize: 40,
//         margin: 40,
//     }
//     // header: {  
//     //     backgroundColor: 'pink',
//     //     padding: 20,
//     // },
//     // boldText: {
//     //     fontWeight: 'bold',
//     // },
//     // buttonContainer: {
//     //     backgroundColor: 'lightblue',
//     //     margin: 20,
//     //     padding: 5,
//     // },
//     // textInput: {
//     //     margin: 10,
//     //     padding: 8,
//     //     borderColor: '#777',
//     //     borderWidth: 1,
//     //     width: 200,
//     // }
// });