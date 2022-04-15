import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import { colors } from "../../styles/colors"
import Account from "./Account"
import { Settings } from "./Settings"

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
            <Stack.Screen name="Account" component={Account}/>
            <Stack.Screen name="Settings" component={Settings}/>
        </Stack.Navigator>
    )

}