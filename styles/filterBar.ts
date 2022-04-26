import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { sizing } from "./page";

export default StyleSheet.create({
    bar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        paddingBottom: sizing.baseLine,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        marginBottom: sizing.baseLine * 2,
    },

    input: {
        backgroundColor: colors.white,
        color: colors.black,
        borderRadius: 10,
        marginVertical: 8,
        marginRight: sizing.baseLine,
        width: "100%"
    },
})