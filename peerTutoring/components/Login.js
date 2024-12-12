import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, StatusBar, Button } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Login({ route }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigation();

    const handleSubmit = () => {
        const userData = { 
            email: email, 
            password }
        axios.post("http://localhost:5001/login", userData)
        .then(res => {
            console.log(res.data);
            if(res.data.status === "ok"){
                alert("Login Successful")
                navigate.replace('Home', { name });
            }
        })
        .catch(e =>{
            console.log("Error", e.message);
            alert("Wrong password. Try again!")
        })
            
    };
    const { name = 'User' } = route.params || {};
    return (
        <View style={styles.container}>
            {/* Wavy Background */}
            <Svg
                height="100%"
                width="100%"
                viewBox="0 0 1440 320"
                style={styles.wave}
                preserveAspectRatio="none"
            >
                <Path
                    fill="#79BAEC"
                    d="M0,140L120,100C240,60,480,40,720,80C960,120,1080,200,1200,220C1320,240,1380,180,1440,140L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
/>
            </Svg>

            {/* Login Form */}
            <View style={styles.formContainer}>
                <Text style={styles.title}>Log In</Text>
                <TextInput
                    style={styles.input}
                    placeholder="School email..."
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
                <Text style={styles.forgotPassword}>Forgot password?</Text>
                <Button onPress={handleSubmit} title="Log In" color='black' />
                <Button onPress={() => navigate.replace('SignUp')} title='Sign Up' color='black'/>
                <StatusBar barStyle="dark-content" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // Fallback color
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
    title: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    forgotPassword: {
        color: 'black',
        marginBottom: 20,
        marginLeft: 250,
    },
});