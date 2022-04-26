import { Ionicons } from "@expo/vector-icons"
import { ParamListBase, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import { colors } from "../../styles/colors"
import core from "../../styles/core"
import { page, sizing } from "../../styles/page"
import utilities from "../../styles/utilities"
import styling from '../../styles/typo';
import button from "../../styles/button"
import SearchBar from "../../components/SearchBar"
import { FlatList } from "react-native-gesture-handler"
import { useEffect, useState } from "react"
import { SQLResultSet, SQLTransaction } from "expo-sqlite"
import { statement, transaction } from "../../utils/database"
import SneakerItem from "../../components/SneakerItem"

export const AllSneakers = () => {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

    const [sneakers, setSneakers] = useState<any[]>([])

    useEffect(() => {
        getSneakers()
    }, [])

    //Sneakers uit database halen
    const getSneakers = async () => {
        console.log("Sneakers ophalen")
        const tx: SQLTransaction = await transaction()
        const read: SQLResultSet = await statement(
            tx,
            `SELECT * FROM 'tblSneaker'`,
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

        return <SneakerItem sneaker={sneaker} key={item.id}/>
    }

    const searchSneakerInAll = async (textInput: string) => {
        console.log(textInput)
        const tx: SQLTransaction = await transaction()
        const read: SQLResultSet = await statement(
            tx,
            `SELECT * FROM 'tblSneaker' WHERE Name LIKE "%${textInput}%"`,
        )
        setSneakers(read.rows._array)
    }

    return (
        <SafeAreaView style={page}>
            <View style={core.header}>
                <View style={button.backButton}>
                    <Ionicons style={[utilities.marginBottomMd, utilities.marginRightMd]} color={colors.gray} name="arrow-back" size={32} onPress={() => navigate("Overview")}/>
                    <Text style={styling.header1}>Add Sneaker: </Text>
                </View>
                {/* Searchbar */}
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={16} color={colors.gray}/>
                    <TextInput style={styles.textSearch} placeholder={'Search sneaker'} placeholderTextColor={colors.gray} onChangeText={searchSneakerInAll}/>
                </View>
            </View>

            <>
                <FlatList data={sneakers} renderItem={renderSneaker}/>
            </>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: sizing.baseLine,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        marginBottom: sizing.baseLine * 2,
    },

    textSearch: {
        backgroundColor: colors.white,
        color: colors.black,
        marginVertical: 8,
        borderRadius: 10,
        marginLeft: sizing.baseLine,
    },
})