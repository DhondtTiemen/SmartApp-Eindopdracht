import { Text } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import sneakersReleases from '../../data/releases.json';

import Card from "../../components/ReleaseCard";

import styling from '../../styles/typo';
import { page } from "../../styles/page";


export default ({ navigation }: {navigation: any}) => {
    const renderReleaseSneaker = ({ item }: { item: Sneaker }) => {
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
            <Text style={styling.header1}>Calendar</Text>
            <>
                <FlatList data={sneakersReleases} renderItem={renderReleaseSneaker}/>
            </>
        </SafeAreaView>
    )
}