import { Ionicons } from "@expo/vector-icons"
import { ParamListBase, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { SQLResultSet, SQLTransaction } from "expo-sqlite"
import { Image, Pressable, ScrollView, Share, Text, View } from "react-native"
import button from "../styles/button"
import card from "../styles/card"
import { colors } from "../styles/colors"
import typo from "../styles/typo"
import utilities from "../styles/utilities"
import { statement, transaction } from "../utils/database"

export default ({ sneaker }: { sneaker?: any }) => {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

    const selectedSneaker = sneaker[0]
    // console.log(selectedSneaker)

    const setReminder = async () => {
        console.log(selectedSneaker.name)
        console.log("Adding reminder...")

        const tx: SQLTransaction = await transaction()
        const res: SQLResultSet = await statement(
            tx,
            `UPDATE "tblSneaker" SET reminder = true WHERE id = ${selectedSneaker.id}`,
        )
        console.log(res)
    }

    const removeReminder = async () => {
        console.log(selectedSneaker.name)
        console.log("Removing reminder!")

        const tx: SQLTransaction = await transaction()
        const res: SQLResultSet = await statement(
            tx,
            `UPDATE "tblSneaker" SET reminder = false WHERE id = ${selectedSneaker.id}`,
        )
        console.log(res)
    }

    const share = async () => {
        const result = await Share.share({
            message: selectedSneaker?.name
        })
        // console.log(result)
    }

    return (
        <View>
            <Ionicons style={utilities.marginBottomMd} color={colors.gray} name="arrow-back" size={32} onPress={() => navigate("Calendar")}/>
            <ScrollView style={[card.cardBig]}>
                <>
                    <Image style={card.imageDetail} source={{uri: `${selectedSneaker?.url}`}} />
                </>
                <View>
                    <Text style={[typo.header2, utilities.marginTopMd]}>{selectedSneaker?.brand} {selectedSneaker?.name}</Text>
                    <Text style={typo.header3}>Release: {selectedSneaker?.releaseDate}</Text>
                    <Text style={typo.header3}>€{selectedSneaker?.price}</Text>
                    <Text style={typo.text}>{selectedSneaker?.description}</Text>
                </View>
                <Pressable style={button.button} onPress={selectedSneaker?.reminder == true ? removeReminder : setReminder}>
                    <Ionicons color={colors.gray} name={selectedSneaker?.reminder == true ? "ios-notifications" : "ios-notifications-outline"} size={32}/>
                    <Text style={[typo.header3, utilities.marginTopSm, utilities.marginLeftSm]}>Add reminder</Text>
                </Pressable>
                <Pressable style={button.button} onPress={share}>
                    <Ionicons color={colors.gray} name="share" size={32}/>
                    <Text style={[typo.header3, utilities.marginTopSm, utilities.marginLeftSm]}>Share</Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}