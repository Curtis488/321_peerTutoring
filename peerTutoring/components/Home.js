import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function Home({ route }) {
    const { name } = route.params;
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
                    d="M0,140L120,100C240,60,480,40,720,80C960,120,1080,200,1200,220C1320,240,1380,180,1440,140L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"/>
            </Svg>
            <View>

            </View>
            <Text style={{fontSize:24, fontWeight: 'bold', marginBottom: 20, marginTop: 50, marginLeft: 20}}>Hello {name},</Text>
            <TextInput placeholder='Search' style={styles.searchBar}/>
            <TouchableOpacity style={styles.card1}>
                <Text style={{fontWeight: 'bold'}}>Welcome!</Text>
                <Text style={{fontWeight: 'bold'}}>Let's make a schedule</Text>
                <Image source={require('../images/tutor.jpg')} style={{width:130, height:70, marginLeft:240, marginTop:-50}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card2}>
                <Text style={{fontSize: 20, fontWeight: 'bold',}}>Book a Tutor!</Text>
                <Image source={require('../images/booking.jpeg')} style={{width:130, height:80, marginLeft:240, marginTop:0}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={console.log('Pressed')}style={styles.card3}>
                <Text style={{fontWeight:'bold', fontSize: 20}}>Check Available Classes</Text>
                <Image source={require('../images/calendar.jpeg')} style={{width:120, height:70, marginLeft:240, marginTop:-50}}/>
            </TouchableOpacity>
    </View>
  )
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
    searchBar: {
        borderColor: 'black',
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        marginLeft: 20,
        paddingLeft: 10,
        borderRadius: 9,
        width: '90%',
        backgroundColor: '#d9d9d9',
    },
    card1: {
        width: '400',
        height: 120,
        backgroundColor: 'white',
        marginTop: 100,
        marginLeft: 15,
        paddingLeft: 15,
        paddingTop: 15,
        borderRadius: 11,
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'space-evenly',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.3,
        elevation: 5,
    },
    card2: {
        width: 400,
        height: 150,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 11,
        marginTop: 30,
        marginLeft: 15,
        paddingLeft: 15,
        paddingTop: 10,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.3,
        elevation: 5,
    },
    card3:{
        width: 400,
        height: 150,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 11,
        marginLeft: 15,
        marginTop: 30,
        paddingTop: 20,
        paddingLeft: 15,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.3,
        elevation: 5,
    },
})
