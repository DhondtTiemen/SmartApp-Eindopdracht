import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

import Collection from "./Collection";

import { colors } from "../../styles/colors";

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
            <Stack.Screen name="Collection" component={Collection}/>
        </Stack.Navigator>
    )
}