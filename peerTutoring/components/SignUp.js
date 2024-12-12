import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, StatusBar, Button, ImageBackground } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigation();

    const handleSubmit = () => {
        const userData = {
            name: name,
            email,
            password,
        };
        axios.post("http://localhost:5001/register", userData)
        .then(res => {
            console.log(res.data);
            if(res.data.status === "ok"){
                alert("Sign Up successful")
                navigate.replace('Login', {name});
            }else{
                console.log("Error:", res.data.data || "Unexpected response");
                alert(res.data.data || "Registration failed");
            }
        })
        .catch(e => {
            console.log("Error:", e.message);
            alert("Email already exists. Please try again!");
        })
        
    };

    return (
            
            <ImageBackground 
            source={require('../images/background.jpg')}
            style={[styles.container, styles.backgroundImage]}
            resizeMode='cover'>
             {/* Login Form */}
             <View style={styles.formContainer}>
                <Text style={styles.title}>Sign Up</Text>
                <View style={styles.input2}>
                <TextInput
                    style={styles.input1}
                    placeholder="First Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input1}
                    placeholder="Last Name"
                    value={name}
                    onChangeText={setName}
                />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="kbs12@st.ug.edu.gh"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password..."
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <Button onPress={handleSubmit} title="Sign Up" color='black' />
                <Button onPress={() => navigate.replace("Login")} title="Login" color='black' />
                <StatusBar barStyle="dark-content" />
            </View>
        
            </ImageBackground>
           
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // Fallback color
    },
    backgroundImage:{
        marginTop: 50,
        height: 900
    },
    wave: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        marginBottom: 20
    },
    input: {
        borderColor: 'black',
        height: 60,
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 9,
        width: '100%',
        backgroundColor: '#d9d9d9',
    },
    input1:{
        borderColor: 'black',
        height: 60,
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 9,
        width: '48%',
        backgroundColor: '#d9d9d9',
    },
    input2:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -100,
        marginBottom: 140,
        marginRight: 150,
    },
    forgotPassword: {
        color: 'black',
        marginBottom: 20,
        marginLeft: 250,
    },
});