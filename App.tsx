import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, StackActions } from '@react-navigation/native';

//Settings pagina

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

import { StatusBar } from 'react-native';
import { useEffect } from 'react';
import { dummyData } from './utils/database';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import Login from './screens/Authentication/Login';
import AppNavigation from './screens/AppNavigation';
import { colors } from './styles/colors';

export default function App() {
  const Stack = createStackNavigator()

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

  const screenOptions : StackNavigationOptions = {
    headerShown: false,

    cardStyle: {
        backgroundColor: colors.white,
    }
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }
  else {
    // return (
    //   <NavigationContainer>
    //     <SafeAreaProvider>
    //       <StatusBar />

    //       <AppNavigation />
    //     </SafeAreaProvider>
    //   </NavigationContainer>
    // );

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions}>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Home' component={AppNavigation}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
