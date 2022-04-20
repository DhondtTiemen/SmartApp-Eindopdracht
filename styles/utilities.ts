import { StyleSheet } from "react-native";

import { sizing } from "./page";

export default StyleSheet.create({
    marginTopSm: {
        marginTop: sizing.baseLine,
    },

    marginTopMd: {
        marginTop: sizing.baseLine * 2,
    },

    marginBottomSm: {
        marginBottom: sizing.baseLine,
    },

    marginBottomMd: {
        marginBottom: sizing.baseLine * 2,
    },

    marginLeftSm: {
        marginLeft: sizing.baseLine,
    },

    marginRightMd: {
        marginRight: sizing.baseLine * 2,
    },

    paddingBottomSm: {
        paddingBottom: sizing.baseLine,
    },

    flexSpaceBetween: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }


}) 