import { Ionicons } from "@expo/vector-icons"
import { SQLResultSet, SQLTransaction } from "expo-sqlite"
import { Image, Pressable, ScrollView, Text, View } from "react-native"
import button from "../styles/button"
import card from "../styles/card"
import { colors } from "../styles/colors"
import typo from "../styles/typo"
import utilities from "../styles/utilities"
import { statement, transaction } from "../utils/database"
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from "react"

export default ({ sneaker }: { sneaker?: any }) => {
    const [inCollection, setInCollection] = useState<boolean>(sneaker.inCollection);
    const animation = useRef(null)
    const isFirstRun = useRef(true)

    useEffect(() => {
        if (isFirstRun.current) {
            if (inCollection) {
                animation.current.play(75, 75)
            }
            else {
                animation.current.play(26, 26)
            }
            isFirstRun.current = false;
        }
        else if (inCollection) {
            animation.current.play(26, 75)
        }
        else {
            animation.current.play(75, 26)
        }
    }, [inCollection])

    const addToCollection = async () => {
        console.log(sneaker.name)
        console.log("Adding to collection...")

        setInCollection(true)

        const tx: SQLTransaction = await transaction()
        const res: SQLResultSet = await statement(
            tx,
            `UPDATE "tblSneaker" SET inCollection = true WHERE id = ${sneaker?.id}`
        )
        console.log(res)
    }

    const removeFromCollection = async () => {
        console.log(sneaker.name)
        console.log("Removing from collection!")

        setInCollection(false)

        const tx: SQLTransaction = await transaction()
        const res: SQLResultSet = await statement(
            tx,
            `UPDATE "tblSneaker" SET inCollection = false WHERE id = ${sneaker?.id}`
        )
        console.log(res)
    }

    return (
        <ScrollView style={card.holder}>
            <View style={utilities.flexSpaceBetween}>
                <View style={button.upperRightButton}>
                    <Image style={[card.imageSmall, utilities.marginRightMd]} source={{uri: `${sneaker.url}`}}/>
                    <View>
                        <Text style={typo.text}>{sneaker.brand.length >= 25 ? `${sneaker?.brand.substring(0, 20)}...` : sneaker?.brand}</Text>
                        <Text style={typo.text}>{sneaker.name.length >= 25 ? `${sneaker?.name.substring(0, 20)}...` : sneaker?.name}</Text>
                    </View>
                </View>
                <Pressable onPress={inCollection == true ? removeFromCollection : addToCollection}>
                    <LottieView 
                        ref={animation}
                        style={{
                            width: 75,
                            height: 75
                        }}
                        source={require('../assets/Lottie/add.json')}
                        autoPlay={false}
                        loop={false}
                    />
                    {/* <Ionicons name={sneaker.inCollection == true ? "checkmark" : "add"} color={sneaker.inCollection == true ? colors.good : colors.gray} size={32}/> */}
                </Pressable>
            </View>
        </ScrollView>
    )
}