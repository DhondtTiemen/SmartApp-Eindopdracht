import { Text, View } from "react-native"

import { CollectionItems } from "../../components/CollectionItems"

export const Overview = ({
    navigation,
}: {
    navigation: any
}) => {
    return (
        <View>
            <CollectionItems navigation={navigation}/>
        </View>
    )
}