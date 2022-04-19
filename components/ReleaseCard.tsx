import { Ionicons } from "@expo/vector-icons"
import { useNavigation, ParamListBase } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { SQLResultSet, SQLTransaction } from "expo-sqlite"
import { Button, Image, Pressable, Text, View } from "react-native"
import card from "../styles/card"
import { colors } from "../styles/colors"
import typo from "../styles/typo"
import utilities from "../styles/utilities"
import { statement, transaction } from "../utils/database"

export default ({ sneaker }: { sneaker?: Sneaker }) => {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

    const setReminder = async () => {
        console.log(sneaker?.name)
        console.log("Adding reminder...")

        const tx: SQLTransaction = await transaction()
        const res: SQLResultSet = await statement(
            tx,
            `UPDATE "tblSneaker" SET reminder = true WHERE id = ${sneaker?.id}`,
        )
        console.log(res)
    }

    const removeReminder = async () => {
        console.log(sneaker?.name)
        console.log("Removing reminder!")

        const tx: SQLTransaction = await transaction()
        const res: SQLResultSet = await statement(
            tx,
            `UPDATE "tblSneaker" SET reminder = false WHERE id = ${sneaker?.id}`,
        )
        console.log(res)
    }

    return (
        <Pressable style={[card.card, utilities.paddingBottomSm]} onPress={() => navigate("Detailrelease", sneaker)}>
            <>
                <Image style={card.image} source={{uri: `${sneaker?.url}`}} />
            </>
            <View style={card.header}>
                <View>
                    <Text style={[typo.header3, utilities.marginTopMd]}>{sneaker?.brand}</Text>
                    <Text style={[typo.header2]}>{sneaker?.name}</Text>
                    <Text style={[typo.header3]}>Release: {sneaker?.releaseDate}</Text>
                </View>
                <Pressable onPress={sneaker?.reminder == true ? removeReminder : setReminder}>
                    <Ionicons style={utilities.marginRightMd} name={sneaker?.reminder == true ? "ios-notifications" : "ios-notifications-outline"} color={colors.gray} size={32}/>
                </Pressable>
            </View>
        </Pressable>
    )
}