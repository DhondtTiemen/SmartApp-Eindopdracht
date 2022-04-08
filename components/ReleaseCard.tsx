import { useNavigation, ParamListBase } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Image, Pressable, Text, View } from "react-native"
import card from "../styles/card"
import typo from "../styles/typo"
import utilities from "../styles/utilities"

export default ({ sneaker }: { sneaker?: Sneaker }) => {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

    return (
        <Pressable style={card.card} onPress={() => navigate('Detail')}>
            <>
                <Image style={card.image} source={{uri: `${sneaker?.url}`}} />
            </>
            <View>
                <Text style={typo.header3}>{sneaker?.brand}</Text>
                <Text style={typo.header2}>{sneaker?.name}</Text>
                <Text style={[typo.header3, utilities.marginBottomMd]}>{sneaker?.releaseDate}</Text>
            </View>
        </Pressable>
    )
}