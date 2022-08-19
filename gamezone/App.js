import React, {useEffect, useState} from 'react';
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import {View} from 'react-native';
import './styles/global';
import Navigator from './routes/drawer';

SplashScreen.preventAutoHideAsync();

export default function App() {

    const [isLoadingComplete, setLoadingComplete] = useState(false);
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function getFonts()
        {
            await Font.loadAsync({
            'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
            'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
            });
            setFontLoaded(true);
        }
        getFonts();
        setLoadingComplete(true);
        SplashScreen.hideAsync();
    },[]);
        
    if(isLoadingComplete && fontLoaded){
        return(
            <Navigator />
        );
    } else {
        return <View />
    }
}
