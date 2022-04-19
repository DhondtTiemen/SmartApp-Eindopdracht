import { Ionicons } from "@expo/vector-icons"
import { ParamListBase, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Image, Pressable, ScrollView, Text, View } from "react-native"
import button from "../../styles/button"
import card from "../../styles/card"
import { colors } from "../../styles/colors"
import core from "../../styles/core"
import { page } from "../../styles/page"
import typo from "../../styles/typo"
import utilities from "../../styles/utilities"

export const Settings = () => {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

    return (
        <View style={page}>
            <View style={[core.header, button.backButton]}>
                <Ionicons style={utilities.marginBottomMd} color={colors.gray} name="arrow-back" size={32} onPress={() => navigate("Account")}/>
                <Text style={[typo.header1, utilities.marginLeftSm]}>Settings</Text>
            </View>
            <View>
                <Text>Dark mode</Text>
            </View>
        </View>
    )
}