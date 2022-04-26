import { SQLResultSet, SQLTransaction } from "expo-sqlite"
import { useEffect, useState } from "react"
import { SafeAreaView, Text, View } from "react-native"
import SneakerCard from "../../components/SneakerCard"
import { detail, styles } from "../../styles/page"
import { statement, transaction } from "../../utils/database"
import styling from '../../styles/typo';
import { FlatList } from "react-native-gesture-handler"
import { Ionicons } from "@expo/vector-icons"
import utilities from "../../styles/utilities"
import { colors } from "../../styles/colors"
import { ParamListBase, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import core from "../../styles/core"
import typo from "../../styles/typo"
import button from "../../styles/button"

export const DetailCollection = ({ route }: { route: any }) => {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

    const [sneaker, setSneaker] = useState<any[]>([])

    const selectedSneaker = route.params;

    //Geselecteerde sneaker uit database halen
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
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={[core.header, button.upperLeftButton]}>
                <Ionicons style={utilities.marginRightMd} color={colors.gray} name="arrow-back" size={32} onPress={() => navigate("Overview")}/>
                <Text style={typo.header2}>{selectedSneaker.name.length >= 30 ? `${selectedSneaker.name.substring(0, 25)}...` : selectedSneaker.name}</Text>
            </View>
            {/* Sneaker info */}
            <SneakerCard sneaker={sneaker}/>
        </SafeAreaView>
    )
}
