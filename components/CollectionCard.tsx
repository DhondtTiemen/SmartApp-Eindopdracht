import { Ionicons } from "@expo/vector-icons"
import { useNavigation, ParamListBase } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Image, Pressable, Text, View } from "react-native"
import card from "../styles/card"
import { colors } from "../styles/colors"
import typo from "../styles/typo"
import utilities from "../styles/utilities"

export default ({ sneaker }: { sneaker?: Sneaker }) => {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

    return (
        <Pressable style={[card.card, utilities.paddingBottomSm]} onPress={() => navigate("Detailcollection")}>
            <>
                <Image style={card.image} source={{uri: `${sneaker?.url}`}} />
            </>
            <View style={card.header}>
                <View>
                    <Text style={[typo.header3, utilities.marginTopMd]}>{sneaker?.brand}</Text>
                    <Text style={[typo.header2]}>{sneaker?.name}</Text>
                    <Text style={[typo.header3]}>€{sneaker?.price}</Text>
                </View>
                <Ionicons style={utilities.marginRightMd} name="checkmark" color={colors.good} size={32}/>
            </View>
        </Pressable>
    )
}