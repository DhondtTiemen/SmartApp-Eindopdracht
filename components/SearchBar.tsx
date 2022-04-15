import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, TextInput, View } from "react-native"
import { colors } from "../styles/colors"
import { sizing } from "../styles/page"

export default () => {
    return (
        <View style={styles.searchBar}>
            <Ionicons name="search" size={16} color={colors.gray}/>
            <TextInput style={styles.textSearch} placeholder={'Search sneaker'} placeholderTextColor={colors.gray}/>
        </View>
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