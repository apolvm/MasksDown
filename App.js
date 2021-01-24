/** Author: AnaPatricia Olvera & Wesley Cheung*/
import { StatusBar } from 'expo-status-bar';
import * as Front from 'expo-font';
import React, {Component, useEffect, useState } from 'react';
import  Home  from './screens/home';
import  AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack'
import * as Location from 'expo-location';

const getFonts = () => Font.loadAsync({
  'quicksand-regular': require('./assets/fonts/Quicksand-Regular.ttf'),
  'quicksand-semibold': require('./assets/fonts/Quicksand-SemiBold.ttf')
})

export default function App() {

/**This part of the code utilized GeoNavigation to ask the user to have access to its location
 */ const [fontsLoaded, setFontsLoaded]= useState(false);

const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  } 

if(fontsLoaded){
  return (
    <Navigator />
   );
} else{
  return(
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      onError= { (error) => {console.log(error)}}
    />
  )
}

}