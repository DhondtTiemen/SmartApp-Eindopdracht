import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

import Overview from "./Collection";
import { DetailCollection } from "./Detail";

import { colors } from "../../styles/colors";

export default () => {
    //Maak een stacknavigator
    const Stack = createStackNavigator()

    const screenOptions : StackNavigationOptions = {
        headerShown: false,

        cardStyle: {
            backgroundColor: colors.alpha,
        }
    }

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Overview" component={Overview}/>
            <Stack.Screen name="Detailcollection" component={DetailCollection}/>
        </Stack.Navigator>
    )
}