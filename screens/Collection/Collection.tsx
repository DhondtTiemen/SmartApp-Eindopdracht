import { useEffect, useState } from "react";
import { Text, SafeAreaView, View, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SQLResultSet, SQLTransaction } from "expo-sqlite";

import { statement, transaction } from "../../utils/database";

import SearchBar from "../../components/SearchBar";
import Card from "../../components/CollectionCard";

import { page } from "../../styles/page"
import styling from '../../styles/typo';
import core from "../../styles/core";
import { Ionicons } from "@expo/vector-icons";
import button from "../../styles/button";
import { colors } from "../../styles/colors";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export default ({ navigation }: {navigation: any}) => {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

    const [sneakers, setSneakers] = useState<any[]>([])

    useEffect(() => {
        getSneakers()
    }, [])

    //Sneakers uit database halen
    const getSneakers = async () => {
        // console.log('Sneakers ophalen')
        const tx: SQLTransaction = await transaction()
        const read: SQLResultSet = await statement(
            tx,
            `SELECT * FROM 'tblSneaker' WHERE inCollection == true`,
        )
        setSneakers(read.rows._array)
    }

    const renderSneaker = ({ item }: { item: Sneaker}) => {
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
            <View style={core.header}>
                <View style={button.upperRightButton}>
                    <Text style={styling.header1}>Collection: </Text>
                    <Pressable>
                        <Ionicons name="add" color={colors.gray} size={32} onPress={() => navigate("AllSneakers")}/>
                    </Pressable>
                </View>
                <SearchBar />
            </View>

            <>
                <FlatList data={sneakers} renderItem={renderSneaker}/>
            </>
        </SafeAreaView>
    )
}