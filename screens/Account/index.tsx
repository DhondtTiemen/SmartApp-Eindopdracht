import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import { colors } from "../../styles/colors"
import Overview from "./Account"
import { Settings } from "./Settings"

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
            <Stack.Screen name="Settings" component={Settings}/>
        </Stack.Navigator>
    )

}