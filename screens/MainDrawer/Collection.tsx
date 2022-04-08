import { Text, View } from "react-native"

import { Overview } from '../CollectionStack/Overview';

import styling from '../../styles/typo';
import { page } from "../../styles/page";

export const Collection = ({
    navigation,
}: {
    navigation:any
}) => {
    return (
        <View style={page}>
            <Text style={styling.text}>My Collection: </Text>
            <Overview navigation={navigation}/>
        </View>
    )
}