import { ParamListBase, RouteProp } from "@react-navigation/native";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Ionicons } from "@expo/vector-icons";

import { Collection } from './Collection';
import { Calendar } from './Calendar';
import { Settings } from './Settings';

import { colors } from "../../styles/colors";


//Maak navigator
const bottomTab = createBottomTabNavigator();

const screenOptions = ({ route }: { route: RouteProp<ParamListBase> }) : BottomTabNavigationOptions => ({
    //Geef elke bottomtab screen een andere icon
    tabBarIcon: ({
        focused,
        color,
        size,
    }: {
        focused: boolean
        color: string
        size: number
    }) => {
        if (route.name == 'Collection')
            return <Ionicons color={color} name="clipboard" size={size}/>

        if (route.name == 'Calendar')
            return <Ionicons color={color} name="calendar" size={size}/>

        if (route.name == 'Account')
            return <Ionicons color={color} name="person" size={size}/>
    },

    tabBarActiveTintColor: colors.alpha,
    tabBarInactiveTintColor: colors.gray,

    headerTintColor: colors.white,
    headerStyle: {
        backgroundColor: colors.alpha,
    },
})

export const MainDrawer = () => {
        return (
            <bottomTab.Navigator screenOptions={screenOptions}>
                <bottomTab.Screen name="Collection" component={Collection}/>
                <bottomTab.Screen name="Calendar" component={Calendar}/>
                <bottomTab.Screen name="Account" component={Settings}/>
            </bottomTab.Navigator>
    )
}