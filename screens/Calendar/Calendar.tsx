import { useEffect, useState } from "react";
import { Text, SafeAreaView, View, ScrollView, StyleSheet } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { SQLResultSet, SQLTransaction } from "expo-sqlite";

import { statement, transaction } from "../../utils/database";

import FilterBar from "../../components/FilterBar";
import Card from "../../components/ReleaseCard";

import styling from '../../styles/typo';
import { page, sizing } from "../../styles/page";
import core from "../../styles/core";
import { colors } from "../../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from 'react-native-picker-select';


export default ({ navigation }: {navigation: any}) => {
    const [sneakers, setSneakers] = useState<any[]>([])
    const [releaseList, setReleaseList] = useState<any[]>([])

    const [selectedMonth, setSelectedMonth] = useState()

    useEffect(() => {
        getSneakers()
    }, [])

    //Sneakers uit database halen
    const getSneakers = async () => {
        console.log('Sneakers ophalen');
        const tx: SQLTransaction = await transaction()
        const read: SQLResultSet = await statement(
            tx,
            `SELECT * FROM 'tblSneaker' ORDER BY releaseDate ASC`,
        )

        for (let index = 0; index < read.rows._array.length; index++) {
            const sneaker = read.rows._array[index];
            // console.log(sneaker.releaseDate);
            // console.log(new Date().toLocaleDateString())

            var releaseDate = new Date(sneaker.releaseDate).toLocaleDateString();
            console.log("Releasedate: ", releaseDate);

            var todayDate = new Date().toLocaleDateString()
            console.log("Todaydate: ", todayDate)

            if (releaseDate >= todayDate) {
                console.log("Goedgekeurd")
                setSneakers(currentArray => [...currentArray, read.rows._array[index]])
            }
        }
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

    const filterSneakers = async ( brand: string ) => {
        console.log(brand);
        const tx: SQLTransaction = await transaction()
        const read: SQLResultSet = await statement(
            tx,
            `SELECT * FROM 'tblSneaker' WHERE Brand LIKE "%${brand}%" ORDER BY releaseDate ASC`,
        )

        for (let index = 0; index < read.rows._array.length; index++) {
            const sneaker = read.rows._array[index];
            // console.log(sneaker.releaseDate);
            // console.log(new Date().toLocaleDateString())

            var releaseDate = new Date(sneaker.releaseDate).toLocaleDateString();
            console.log("Releasedate: ", releaseDate);

            var todayDate = new Date().toLocaleDateString()
            console.log("Todaydate: ", todayDate)

            if (releaseDate >= todayDate) {
                console.log("Goedgekeurd")
                setSneakers(() => [read.rows._array[index]])
            }
        }
    }

    return (
        <SafeAreaView style={page}>
            <View style={core.header}>
                <Text style={styling.header1}>Calendar</Text>
                <View style={styles.filterBar}>
                    <View style={styles.textFilter}>
                        <RNPickerSelect
                            onValueChange={filterSneakers}
                            items={[
                                { label: 'Adidas', value: 'Adidas' },
                                { label: 'Converse', value: 'Converse' },
                            ]}
                        />
                    </View>
                    <Ionicons name="chevron-down" size={16} color={colors.gray}/>
                </View>
            </View>

            <>
                <FlatList data={sneakers} renderItem={renderSneaker}/>
            </>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    filterBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        paddingBottom: sizing.baseLine,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        marginBottom: sizing.baseLine * 2,
    },

    textFilter: {
        backgroundColor: colors.white,
        color: colors.black,
        borderRadius: 10,
        marginVertical: 8,
        marginRight: sizing.baseLine,
    }
})