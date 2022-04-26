import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { sizing } from "./page";

export default StyleSheet.create({
    upperRightButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    
    upperLeftButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
    },

    button: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",

        height: 75,

        borderRadius: 16,
        borderWidth: 1,

        paddingHorizontal: sizing.baseLine * 2,
        paddingVertical: sizing.baseLine,

        marginVertical: sizing.baseLine,
    },
})