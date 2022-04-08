import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context"

import sneakersCollection from '../../data/collection.json';

import SearchBar from "../../components/SearchBar";
import Card from "../../components/CollectionCard";

import { page } from "../../styles/page"
import styling from '../../styles/typo';

export default ({ navigation }: {navigation: any}) => {
    const renderCollectionSneaker = ({ item }: { item: Sneaker}) => {
        const sneaker: Sneaker = {
            id: item.id,
            brand: item.brand,
            name: item.name,
            price: item.price,
            url: item.url,
            releaseDate: item.releaseDate,
            inCollection: item.inCollection,
            reminder: item.reminder,
        }

        return <Card sneaker={sneaker} key={item.id}/>
    }

    return (
        <SafeAreaView style={page}>
            <Text style={styling.header1}>My Collection</Text>
            <SearchBar />
            <>
                <FlatList data={sneakersCollection} renderItem={renderCollectionSneaker}/>
            </>
        </SafeAreaView>
    )
}