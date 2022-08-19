import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import RiveTry from './riveTry';


export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [recording, setRecording] = useState(false);
    const [cameraRef, setCameraRef] = useState(null);
    const [video, setVideo] = useState(null);

useEffect(() => {
    (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
    
    if (Platform.OS === 'android') {
        try {
            const grants = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            ]);

            console.log('write external stroage', grants);

            if (
                grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                grants['android.permission.READ_EXTERNAL_STORAGE'] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                grants['android.permission.RECORD_AUDIO'] ===
                    PermissionsAndroid.RESULTS.GRANTED
                ) {
                console.log('Permissions granted');
                } else {
                console.log('All required permissions not granted');
                return;
                }
            } catch (err) {
                console.warn(err);
                return;
            }
    } else {
        console.log('Not Android');
        }
    })();

    if (hasPermission) {
        setRecording(true);
        setVideo(async () => {
            console.log("recording started");
            await cameraRef.recordAsync();
            console.log("recording stopped");
        });
        console.log("VIDEO ", video);
    }

    }, [recording]);

    useEffect(() => {
        console.log("Mounted");
        console.log("video: ", video);
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            <Camera
                style={{ flex: 1 }}
                type={type}
                ref={(ref) => {
                setCameraRef(ref);
                }}
            >
                <View
                style={{
                    flex: 1,
                    backgroundColor: "transparent",
                    justifyContent: "flex-end",
                }}
                >
                <View
                    style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    }}
                >
                    <TouchableOpacity
                    style={{
                        flex: 0.1,
                        alignSelf: "flex-end",
                    }}
                    onPress={() => {
                        setType(
                        type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                        );
                    }}
                    >
                    <Ionicons
                        name="add"
                        size={40}
                        color="white"
                    />
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={async () => {
                        if (cameraRef) {
                        let photo = await cameraRef.takePictureAsync();
                        console.log("photo", photo);
                        }
                    }}
                    >
                    <View
                        style={{
                        borderWidth: 2,
                        borderRadius: 25,
                        borderColor: "white",
                        height: 50,
                        width: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        }}
                    >
                        <View
                        style={{
                            borderWidth: 2,
                            borderRadius: 25,
                            borderColor: "white",
                            height: 40,
                            width: 40,
                            backgroundColor: "white",
                        }}
                        ></View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={async () => {
                        if (!recording) {
                            console.log("if loop");
                            console.log(recording);
                            setRecording(true);
                            setVideo(await cameraRef.recordAsync());
                            console.log("video ", video);
                        } else {
                            console.log("else loop");
                            console.log(recording);
                            setRecording(false);
                            cameraRef.stopRecording();
                        }
                    }}
                    >
                    <View
                        style={{
                        borderWidth: 2,
                        borderRadius: 25,
                        borderColor: "red",
                        height: 50,
                        width: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        }}
                    >
                        <View
                        style={{
                            borderWidth: 2,
                            borderRadius: 25,
                            borderColor: "red",
                            height: 40,
                            width: 40,
                            backgroundColor: "red",
                        }}
                        ></View>
                    </View>
                    </TouchableOpacity>
                </View>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});