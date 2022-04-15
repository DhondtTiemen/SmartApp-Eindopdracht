import { SQLResultSet, SQLTransaction } from "expo-sqlite"
import { useEffect, useState } from "react"
import { SafeAreaView, Text, View } from "react-native"
import SneakerCard from "../../components/SneakerCard"
import { detail, page } from "../../styles/page"
import { statement, transaction } from "../../utils/database"
import styling from '../../styles/typo';
import { FlatList } from "react-native-gesture-handler"

export const DetailCollection = ({ props }: { props: any }) => {

    const [sneaker, setSneaker] = useState<any[]>([])

    const selectedSneaker = {
        id: 12345,
    }

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


    // const renderSneaker = ({ item }: { item: Sneaker }) => {
    //     const sneaker: Sneaker = {
    //         id: item.id,
    //         brand: item.brand,
    //         name: item.name,
    //         price: item.price,
    //         url: item.url,
    //         releaseDate: item.releaseDate,
    //         inCollection: item.inCollection,
    //         reminder: item.reminder,
    //     }

    //     return <SneakerCard sneaker={sneaker} key={item.id}/>
    // }

    return (
        <SafeAreaView style={[page, detail]}>
            <SneakerCard sneaker={sneaker}/>
        </SafeAreaView>
    )
}
