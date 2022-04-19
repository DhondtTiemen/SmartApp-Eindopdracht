import { Ionicons } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import button from "../styles/button";
import card from "../styles/card";
import { colors } from "../styles/colors";
import typo from "../styles/typo";
import utilities from "../styles/utilities";

export default ({ sneaker }: { sneaker?: any }) => {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

    const selectedSneaker = sneaker[0]
    console.log(selectedSneaker);

    return (
        <View>
            <Ionicons style={utilities.marginBottomMd} color={colors.gray} name="arrow-back" size={32} onPress={() => navigate("Overview")}/>
            <ScrollView style={[card.cardBig]}>
                <>
                    <Image style={card.imageDetail} source={{uri: `${selectedSneaker?.url}`}} />
                </>
                <View>
                    <Text style={[typo.header2, utilities.marginTopMd]}>{selectedSneaker?.brand} {selectedSneaker?.name}</Text>
                    <Text style={typo.header3}>Released: {selectedSneaker?.releaseDate}</Text>
                    <Text style={typo.header3}>€{selectedSneaker?.price}</Text>
                    <Text style={typo.text}>{selectedSneaker?.description}</Text>
                </View>
                <Pressable style={button.button}>
                    <Ionicons name={selectedSneaker?.inCollection == true ? "checkmark" : "add"} color={selectedSneaker?.inCollection == true ? colors.good : colors.gray} size={32}/>
                    <Text style={[typo.header3, utilities.marginTopSm, utilities.marginLeftSm]}>{selectedSneaker?.inCollection == true ? "Added to your collection" : "Add to your collection"}</Text>
                </Pressable>
                <Pressable style={button.button}>
                    <Ionicons color={colors.gray} name="share" size={32}/>
                    <Text style={[typo.header3, utilities.marginTopSm, utilities.marginLeftSm]}>Share</Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}