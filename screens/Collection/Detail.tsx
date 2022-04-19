import { SQLResultSet, SQLTransaction } from "expo-sqlite"
import { useEffect, useState } from "react"
import { SafeAreaView, Text, View } from "react-native"
import SneakerCard from "../../components/SneakerCard"
import { detail, page } from "../../styles/page"
import { statement, transaction } from "../../utils/database"
import styling from '../../styles/typo';
import { FlatList } from "react-native-gesture-handler"

export const DetailCollection = ({ route }: { route: any }) => {
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
        <SafeAreaView style={[page, detail]}>
            <SneakerCard sneaker={sneaker}/>
        </SafeAreaView>
    )
}
