import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { sizing } from "./page";

export default StyleSheet.create({
    imageHolder: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },

    image: {
        height: 100,
        width: 100,
        resizeMode: "cover",
        borderRadius: 100,
        marginBottom: sizing.baseLine * 3,
    },

    input: {
        fontSize: 16,
        marginBottom: sizing.baseLine * 2,
    },
})