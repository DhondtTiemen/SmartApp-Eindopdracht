import { Ionicons } from "@expo/vector-icons"
import { useNavigation, ParamListBase } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { CalendarAccessLevel, createCalendarAsync, createEventAsync, EntityTypes, getCalendarsAsync, getDefaultCalendarAsync, requestCalendarPermissionsAsync } from "expo-calendar"
import { SQLResultSet, SQLTransaction } from "expo-sqlite"
import { useEffect, useRef, useState } from "react"
import { Button, Image, Platform, Pressable, Text, View } from "react-native"
import card from "../styles/card"
import { colors } from "../styles/colors"
import typo from "../styles/typo"
import utilities from "../styles/utilities"
import { statement, transaction } from "../utils/database"
import LottieView from 'lottie-react-native';

export default ({ sneaker }: { sneaker: Sneaker }) => {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

    const [reminder, setReminder] = useState<boolean>(sneaker.reminder);
    const animation = useRef(null)
    const isFirstRun = useRef(true)

    useEffect(() => {
        if (isFirstRun.current) {
            if (reminder) {
                animation.current.play(54, 54)
            }
            else {
                animation.current.play(0, 0)
            }
            isFirstRun.current = false;
        }
        else if (reminder) {
            animation.current.play(0, 54)
        }
        else {
            animation.current.play(54, 0)
        }
    }, [reminder])

    // useEffect(() => {
    //     (async () => {
    //         const { status } = await requestCalendarPermissionsAsync();

    //         if (status === "granted") {
    //             const calendars = await getCalendarsAsync(EntityTypes.EVENT);
    //             console.log({ calendars })
    //         }
    //     })()
    // }, [])

    // async function getDefaultCalendarSource() {
    //     const calendars = await getCalendarsAsync(EntityTypes.EVENT);
    //     const defaultCalendars = calendars.filter((each) => each.source.name === 'Default');
    //     return defaultCalendars.length 
    //     ? defaultCalendars[0].source 
    //     : calendars[0].source;
    // }
      
    // async function createCalendar() {
    //     const defaultCalendarSource = Platform.OS === 'ios' 
    //     ? await getDefaultCalendarSource() 
    //     : { isLocalAccount: true, name: 'Sneaker Calendar' };

    //     const newCalendarID = await createCalendarAsync({
    //         title: 'Sneaker Calendar',
    //         color: 'blue',
    //         entityType: EntityTypes.EVENT,
    //         sourceId: defaultCalendarSource.id,
    //         source: defaultCalendarSource,
    //         name: 'internalCalendarName',
    //         ownerAccount: 'personal',
    //         accessLevel: CalendarAccessLevel.OWNER,
    //     });

    //     console.log(`Your new calendar ID is: ${newCalendarID}`);
    //     return newCalendarID;
    // }

    const addReminder = async () => {
        console.log(sneaker?.name)
        console.log("Adding reminder...")

        // try {
        //     const calendarId = await createCalendar();
            
        //     const res = await createEventAsync(calendarId, 
        //     {
        //         endDate: getAppointementDate(startDate),
        //         startDate: getAppointementDate(startDate),
        //         title: 'Happy Birthday buddy ' + friendNameText,
        //     });
        //     console.log('Event Created!');
        //   } 
        //   catch (e) {
        //     console.log(e);
        //   }

        setReminder(true)

        const tx: SQLTransaction = await transaction()
        const res: SQLResultSet = await statement(
            tx,
            `UPDATE "tblSneaker" SET reminder = true WHERE id = ${sneaker?.id}`,
        )
        console.log(res)
    }

    const removeReminder = async () => {
        console.log(sneaker?.name)
        console.log("Removing reminder!")

        setReminder(false)

        const tx: SQLTransaction = await transaction()
        const res: SQLResultSet = await statement(
            tx,
            `UPDATE "tblSneaker" SET reminder = false WHERE id = ${sneaker?.id}`,
        )
        console.log(res)
    }

    return (
        <Pressable style={card.holder} onPress={() => navigate("Detailrelease", sneaker)}>
            <Image style={card.image} source={{uri: `${sneaker?.url}`}} />
            <View style={card.body}>
                <View>
                    <Text style={[typo.header3, utilities.marginTopMd]}>{sneaker?.brand}</Text>
                    <Text style={typo.header2}>{sneaker.name.length >= 30 ? `${sneaker?.name.substring(0, 25)}...` : sneaker?.name}</Text>
                    <Text style={typo.header3}>Release: {sneaker?.releaseDate}</Text>
                </View>
                <Pressable onPress={reminder == true ? removeReminder : addReminder}>
                    <LottieView 
                        ref={animation}
                        style={{
                            width: 75,
                            height: 75
                        }}
                        source={require('../assets/Lottie/reminder.json')}
                        autoPlay={false}
                        loop={false}
                    />
                    {/* <Ionicons style={utilities.marginRightMd} name={sneaker?.reminder == true ? "ios-notifications" : "ios-notifications-outline"} color={colors.gray} size={32}/> */}
                </Pressable>
            </View>
        </Pressable>
    )
}