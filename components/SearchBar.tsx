import { StyleSheet, TextInput } from "react-native"
import { colors } from "../styles/colors"
import { sizing } from "../styles/page"

export default () => {
    return (
        <TextInput style={styles.textSearch} placeholder={'Search sneaker'} placeholderTextColor={colors.gray}/>
    )
}

const styles = StyleSheet.create({
    textSearch: {
        backgroundColor: colors.white,
        color: colors.black,
        marginVertical: 8,
        marginBottom: sizing.baseLine * 2,
        borderRadius: 10,

    },
})