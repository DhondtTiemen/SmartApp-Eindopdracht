import { useEffect, useState } from "react";
import { Text } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SQLResultSet, SQLTransaction } from "expo-sqlite";

import { statement, transaction } from "../../utils/database";

import FilterBar from "../../components/FilterBar";
import Card from "../../components/ReleaseCard";

import styling from '../../styles/typo';
import { page } from "../../styles/page";


export default ({ navigation }: {navigation: any}) => {
    const [sneakers, setSneakers] = useState<any[]>([])

    useEffect(() => {
        getSneakers()
    }, [])

    //Sneakers uit database halen
    const getSneakers = async () => {
        console.log('Sneakers ophalen');
        const tx: SQLTransaction = await transaction()
        const read: SQLResultSet = await statement(
            tx,
            `SELECT * FROM 'tblSneaker'`,
        )
        setSneakers(read.rows._array)
    }

    const renderSneaker = ({ item }: { item: Sneaker }) => {
        const sneaker: Sneaker = {
            id: item.id,
            brand: item.brand,
            name: item.name,
            price: item.price,
            url: item.url,
            description: item.description,
            releaseDate: item.releaseDate,
            inCollection: item.inCollection,
            reminder: item.reminder,
        }

        return <Card sneaker={sneaker} key={item.id}/>
    }

    return (
        <SafeAreaView style={page}>
            <Text style={styling.header1}>Calendar</Text>
            <FilterBar/>

            <>
                <FlatList data={sneakers} renderItem={renderSneaker}/>
            </>
        </SafeAreaView>
    )
}