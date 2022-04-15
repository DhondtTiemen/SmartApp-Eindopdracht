import { SQLResultSet, SQLTransaction } from "expo-sqlite"
import { useEffect, useState } from "react"
import { SafeAreaView, Text, View } from "react-native"
import ReleaseSneakerCard from "../../components/ReleaseSneakerCard"
import { detail, page } from "../../styles/page"
import { statement, transaction } from "../../utils/database"

export const DetailRelease = ({ props }: { props:any }) => {

    const [sneaker, setSneaker] = useState<any[]>([])

    const selectedSneaker = {
        id: 456789,
    }

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
        <SafeAreaView style={[page, detail]}>
            <ReleaseSneakerCard sneaker={sneaker}/>
        </SafeAreaView>
    )
}