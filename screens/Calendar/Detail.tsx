import { Ionicons } from "@expo/vector-icons"
import { ParamListBase, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { SQLResultSet, SQLTransaction } from "expo-sqlite"
import { useEffect, useState } from "react"
import { SafeAreaView, Text, View } from "react-native"
import ReleaseSneakerCard from "../../components/ReleaseSneakerCard"
import button from "../../styles/button"
import { colors } from "../../styles/colors"
import core from "../../styles/core"
import { detail, styles } from "../../styles/page"
import typo from "../../styles/typo"
import utilities from "../../styles/utilities"
import { statement, transaction } from "../../utils/database"

export const DetailRelease = ({ route }: { route: any }) => {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

    const [sneaker, setSneaker] = useState<any[]>([])

    const selectedSneaker = route.params

    //Geselecteerd sneaker uit database halen
    const getSneaker = async () => {
        const tx: SQLTransaction = await transaction()
        const result: SQLResultSet = await statement(
            tx,
            `SELECT * FROM 'tblSneaker' WHERE tblSneaker.id == ${selectedSneaker.id}`
        )
        setSneaker(result.rows._array)
    }

    useEffect(() => {
        getSneaker()
        console.log('Getting sneaker ready')
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={[core.header, button.upperLeftButton]}>
                <Ionicons style={utilities.marginRightMd} color={colors.gray} name="arrow-back" size={32} onPress={() => navigate("Calendar")}/>
                <Text style={typo.header2}>{selectedSneaker.name.length >= 30 ? `${selectedSneaker.name.substring(0, 25)}...` : selectedSneaker.name}</Text>
            </View>
            {/* Sneaker info */}
            <ReleaseSneakerCard sneaker={sneaker}/>
        </SafeAreaView>
    )
}