import { FlatList, Text, TouchableOpacity } from "react-native";

import sneakers from '../data/sneakers.json';

export const CollectionItems = ({ navigation }: {navigation: any}) => {
    const renderItem = ({ item }: { item: Sneaker}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {payload: item})}>
                <Text>{item.brand}</Text>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList data={sneakers} renderItem={renderItem} keyExtractor={(item) => item.id}/>
    )
}