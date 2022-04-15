import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"

import Calendar from "./Calendar"
import { DetailRelease } from "./Detail"

import { colors } from "../../styles/colors"

export default () => {
    const Stack = createStackNavigator()

    const screenOptions : StackNavigationOptions = {
        headerShown: false,

        cardStyle: {
            backgroundColor: colors.alpha,
        }
    }

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Calendar" component={Calendar}/>
            <Stack.Screen name="Detailrelease" component={DetailRelease}/>
        </Stack.Navigator>
    )
}