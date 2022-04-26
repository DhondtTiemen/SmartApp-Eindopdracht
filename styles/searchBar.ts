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
        marginVertical: 8,
        borderRadius: 10,
        marginLeft: sizing.baseLine,
        width: "100%",
    },
})