import { StyleSheet } from "react-native";
import { sizing } from "./page";

export default StyleSheet.create({
    header: {
        paddingTop: sizing.baseLine * 2,
    },
    
    body: {
        paddingTop: sizing.baseLine * 5,
    },

    footer: {
        paddingTop: sizing.baseLine * 5,
    }
})