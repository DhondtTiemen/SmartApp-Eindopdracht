import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import SneakerCard from "../../components/SneakerCard"
import { page } from "../../styles/page"

export const Detail = (props: any) => {
    const renderSneaker = ({ item }: { item: Sneaker }) => {
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

        return <SneakerCard sneaker={sneaker} key={item.id}/>
    }
    return (
        <SafeAreaView style={page}>
            <SneakerCard renderItem={renderSneaker}/>
        </SafeAreaView>
    )
}
