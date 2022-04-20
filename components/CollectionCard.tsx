import { Ionicons } from "@expo/vector-icons"
import { useNavigation, ParamListBase, useRoute } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { SQLResultSet, SQLTransaction } from "expo-sqlite"
import { Image, Pressable, Text, View } from "react-native"
import card from "../styles/card"
import { colors } from "../styles/colors"
import typo from "../styles/typo"
import utilities from "../styles/utilities"
import { statement, transaction } from "../utils/database"

export default ({ sneaker }: { sneaker: Sneaker }) => {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

    const removeFromCollection = async () => {
        console.log(sneaker.name)
        console.log("Removing from collection!")

        const tx: SQLTransaction = await transaction()
        const res: SQLResultSet = await statement(
            tx,
            `UPDATE "tblSneaker" SET inCollection = false WHERE id = ${sneaker?.id}`
        )
        console.log(res)
    }

    return (
        <Pressable style={[card.card, utilities.paddingBottomSm]} onPress={() => navigate("Detailcollection", sneaker)}>
            <>
                <Image style={card.image} source={{uri: `${sneaker?.url}`}} />
            </>
            <View style={card.header}>
                <View>
                    <Text style={[typo.header3, utilities.marginTopMd]}>{sneaker?.brand}</Text>
                    <Text style={[typo.header2]}>{sneaker.name.length >= 30 ? `${sneaker?.name.substring(0, 25)}...` : sneaker?.name}</Text>
                    <Text style={[typo.header3]}>€{sneaker?.price}</Text>
                </View>
                <Pressable onPress={removeFromCollection}>
                    <Ionicons style={utilities.marginRightMd} name={sneaker?.inCollection == true ? "checkmark" : "close"} color={sneaker?.inCollection == true ? colors.good : colors.error} size={32}/>
                </Pressable>
            </View>
        </Pressable>
    )
}