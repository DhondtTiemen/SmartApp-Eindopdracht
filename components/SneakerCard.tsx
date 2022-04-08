import { Image, Text, View } from "react-native"

export default ({ sneaker }: { sneaker?: Sneaker }) => {
    return (
        <View>
            <Image source={{uri: `${sneaker?.url}`}} />
            <Text>${sneaker?.brand}</Text>
        </View>
    )
}