import { useEffect, useState } from "react";
import { Text, SafeAreaView, View, ScrollView, StyleSheet, RefreshControl } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { SQLResultSet, SQLTransaction } from "expo-sqlite";

import { statement, transaction } from "../../utils/database";

import Card from "../../components/ReleaseCard";

import styling from '../../styles/typo';
import { styles, sizing } from "../../styles/page";
import core from "../../styles/core";
import { colors } from "../../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from 'react-native-picker-select';
import filter from "../../styles/filterBar";
import utilities from "../../styles/utilities";


export default ({ navigation }: {navigation: any}) => {
    const [sneakers, setSneakers] = useState<any[]>([])
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        getSneakers()
    }, [])

    //Sneakers uit database halen
    const getSneakers = async () => {
        console.log('Sneakers ophalen');
        const tx: SQLTransaction = await transaction()
        const read: SQLResultSet = await statement(
            tx,
            `SELECT * FROM 'tblSneaker' WHERE DATE(releaseDate) >= DATE() ORDER BY DATE(releaseDate) ASC`,
        )
        console.log(read);
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

    const onRefresh = () => {
        console.log("Refreshing")
        getSneakers();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={core.header}>
                <Text style={styling.header1}>Calendar</Text>

                {/* Filter bar */}
                <View style={filter.bar}>
                    <Ionicons style={utilities.marginRightMd} name="chevron-down" size={16} color={colors.gray}/>
                    <View style={filter.input}>
                        <RNPickerSelect
                            placeholder={{ label: "Choose a brand", value: null }}
                            onValueChange={filterSneakers}
                            items={[
                                { label: 'Adidas', value: 'Adidas' },
                                { label: 'Converse', value: 'Converse' },
                                { label: 'Nike', value: 'Nike' },
                            ]}
                        />
                    </View>
                </View>
            </View>

            {/* Flatlist */}
            <FlatList data={sneakers} renderItem={renderSneaker} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}/>
        </SafeAreaView>
    )
}