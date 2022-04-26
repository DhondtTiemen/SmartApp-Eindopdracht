import { Ionicons } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SQLResultSet, SQLTransaction } from "expo-sqlite";
import { Button, Image, Pressable, ScrollView, Share, StyleSheet, Text, View } from "react-native"
import button from "../styles/button";
import card from "../styles/card";
import { colors } from "../styles/colors";
import typo from "../styles/typo";
import utilities from "../styles/utilities";
import { statement, transaction } from "../utils/database";

export default ({ sneaker }: { sneaker?: any }) => {

    const selectedSneaker = sneaker[0]
    console.log(selectedSneaker);

    const addToCollection = async () => {
        console.log(selectedSneaker.name)
        console.log("Adding to your collection...")
    }

    const removeFromCollection = async () => {
        console.log(selectedSneaker.name)
        console.log("Removing from your collection!")

        const tx: SQLTransaction = await transaction()
        const res: SQLResultSet = await statement(
            tx,
            `UPDATE "tblSneaker" SET inCollection = false WHERE id = ${selectedSneaker.id}`,
        )
        console.log(res)
    }

    const share = async () => {
        const result = await Share.share({
            message: selectedSneaker?.name
        })
        // console.log(result)
    }

    return (
        <ScrollView>
            <Image style={card.image} source={{uri: `${selectedSneaker?.url}`}} />
            <View>
                <Text style={[typo.header2, utilities.marginTopMd]}>{selectedSneaker?.brand} {selectedSneaker?.name}</Text>
                <Text style={typo.header3}>Released: {selectedSneaker?.releaseDate}</Text>
                <Text style={typo.header3}>€{selectedSneaker?.price}</Text>
                <Text style={typo.text}>{selectedSneaker?.description}</Text>
            </View>
            <Pressable style={button.button} onPress={selectedSneaker?.inCollection == true ? removeFromCollection : addToCollection}>
                <Ionicons style={utilities.marginRightMd} name={selectedSneaker?.inCollection == true ? "checkmark" : "add"} color={selectedSneaker?.inCollection == true ? colors.good : colors.gray} size={32}/>
                <Text style={[typo.header3, utilities.marginTopSm]}>{selectedSneaker?.inCollection == true ? "Added to your collection" : "Add to your collection"}</Text>
            </Pressable>
            <Pressable style={button.button} onPress={share}>
                <Ionicons style={utilities.marginRightMd} color={colors.gray} name="share" size={32}/>
                <Text style={[typo.header3, utilities.marginTopSm]}>Share</Text>
            </Pressable>
        </ScrollView>
    )
}