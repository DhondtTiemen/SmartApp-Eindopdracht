import { Button, Image, ScrollView, Text, TextInput, View } from "react-native"

import styling from '../../styles/typo';
import { page } from "../../styles/page";
import account from "../../styles/account";
import typo from "../../styles/typo";
import { useState } from "react";
import { colors } from "../../styles/colors";
import { Settings } from "lucide-react";
import utilities from "../../styles/utilities";

export const Account = () => {
    const triggerLogOut = () => {
        console.log("Logging out...")
    }

    const triggerDeleteAccount = () => {
        console.log("Deleting account...")
    }

    //UseStates
    const [firstName, setFirstName] = useState("Tiemen")
    const [lastName, setLastName] = useState("Dhondt")
    const [email, setEmail] = useState("tiemen.dhondt2@student.howest.be")
    return (
        <ScrollView style={page}>
            <Text style={styling.header1}>Account: </Text>

            <View style={account.imageHolder}>
                <Image style={account.image} source={{uri: "https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-9/157230181_1421015028235325_2604689619399905216_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Ab8SwAJ_VtAAX8OJauL&_nc_ht=scontent-bru2-1.xx&oh=00_AT_rkn9xqjoAvrfttmpPcNuDjgiWIXH5yZ24aFoZE6qMCg&oe=6276B21D"}}/>
            </View>
            
            <Text style={typo.header2}>First Name</Text>
            <TextInput style={account.input} onChangeText={(str) => setFirstName(str)} value={firstName} placeholder={"John"}/>

            <Text style={typo.header2}>Last Name</Text>
            <TextInput style={account.input} onChangeText={(str) => setLastName(str)} value={lastName} placeholder={"Doe"}/>

            <Text style={typo.header2}>Email</Text>
            <TextInput style={account.input} onChangeText={(str) => setEmail(str)} value={email} placeholder={"john.doe@email.com"}/>

            <Button color={colors.error} onPress={triggerLogOut} title="Log out"/>
            <Button color={colors.error} onPress={triggerDeleteAccount} title="Delete Account"/>
        </ScrollView>
    )
}