import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { sizing } from "./page";

export default StyleSheet.create({
    card: {
        // flexDirection: "row",
        // alignItems: "center",
        marginBottom: sizing.baseLine * 3,
        borderBottomWidth: 1,
        borderColor: colors.gray,
    },

    image: {
        height: 200,
        resizeMode: "cover",
        marginRight: sizing.baseLine * 2,
    }
})