import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { sizing } from "./page";

export default StyleSheet.create({
    card: {
        // flexDirection: "row",
        // alignItems: "center",
        marginBottom: sizing.baseLine * 3,
        borderBottomWidth: 1,
        borderColor: colors.gray[100],
    },

    cardBig: {
        borderBottomWidth: 0,
    },

    cardSmall: {
        marginBottom: sizing.baseLine,
    },

    image: {
        height: 200,
        width: "100%",
        resizeMode: "cover",
        marginRight: sizing.baseLine * 2,
    },

    imageDetail: {
        height: 200,
    },

    imageSmall: {
        height: 100,
        width: 100,
        resizeMode: "contain",
    },

    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
})