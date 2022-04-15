import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

//Fonts
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_400Regular,
  Inter_300Light,
} from '@expo-google-fonts/inter';
import {
  Abel_400Regular,
} from '@expo-google-fonts/abel';
import {
  OpenSans_400Regular,
} from '@expo-google-fonts/open-sans';

import AppNavigation from './screens/AppNavigation';
import { StatusBar } from 'react-native';
import { useEffect } from 'react';
import { dummyData } from './utils/database';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Inter_400Regular,
    Inter_300Light,
    Abel_400Regular,
    OpenSans_400Regular,
  })

  useEffect(() => {
    // console.log('Gegevens toevoegen');
    // dummyData()
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />
  }
  else {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar />

          <AppNavigation />
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}
