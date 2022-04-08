import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"

import Calendar from "./Calendar"

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
            <Stack.Screen name="Calendar" component={Calendar}/>
        </Stack.Navigator>
    )
}