import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { sizing } from "./page";

export default StyleSheet.create({
    button: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",

        height: 75,

        paddingHorizontal: sizing.baseLine * 2,
        paddingVertical: sizing.baseLine,
        borderRadius: 16,

        borderWidth: 1,

        marginVertical: sizing.baseLine,
    },

    upperRightButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    backButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    }
})