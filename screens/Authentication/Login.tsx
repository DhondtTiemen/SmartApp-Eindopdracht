import { ParamListBase, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { useState } from "react"
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from "react-native"

import { authentication } from "../../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default () => {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
    
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const registerUser = () => {
        console.log('Registreren')
        // createUserWithEmailAndPassword(authentication, email, password)
        // .then((userCredentials) => {
        //     console.log(userCredentials)
        //     setIsSignedIn(true)
        // })
        // .catch((errors => {
        //     console.log(errors.message)
        // }))

        navigate('Home')
    }

    const signInUser = () => {
        console.log('Inloggen')
        // signInWithEmailAndPassword(authentication, email, password)
        // .then((userCredentials) => {
        //     setIsSignedIn(true);
        // })
        // .catch((errors) => {
        //     console.log(errors.message)
        // })

        navigate('Home')
    }
    
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Email' value={email} onChangeText={text => setEmail(text)} style={styles.input}/>
                <TextInput placeholder='Password' value={password} onChangeText={text => setPassword(text)} style={styles.input} secureTextEntry={true}/>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={signInUser} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={registerUser} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    inputContainer: {
        width: '80%',
    },

    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },

    buttonContainer: {
        width: '60%',
        alignItems: "center",
        marginTop: 40,
    },

    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },

    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },

    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },


    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})