import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"

import Overview from "./Overview"
import { DetailRelease } from "./Detail"

import { colors } from "../../styles/colors"

export default () => {
    const Stack = createStackNavigator()

    const screenOptions : StackNavigationOptions = {
        headerShown: false,

        cardStyle: {
            backgroundColor: colors.white,
        }
    }

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Overview" component={Overview}/>
            <Stack.Screen name="Detailrelease" component={DetailRelease}/>
        </Stack.Navigator>
    )
}