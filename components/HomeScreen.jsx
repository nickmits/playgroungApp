//import 'react-native-gesture-handler';
import React, { useState }from 'react';
import { Button, View, StyleSheet, Image } from 'react-native';
import Modal from './Modal';

export default function HomeScreen ({ navigation }) {

    const styles = StyleSheet.create({
        backgroundImage: {
            backgroundColor:"#fff",
            flex: 1,
            width: null,
            height: null
        }
    });
    
    return(
    <React.Fragment>
       <View style={styles.backgroundImage}>         
            <Image
                style={styles.backgroundImage}
                source={require('../icons/HomeScreen.png')}
            /> 
            <Modal 
                iconModal={<View style={styles.fancyAlert}><Image resizeMode="contain" source={require('../assets/icon.png')}/></View>}
                text="Σκανάρετε το Barcode του οργάνου που φέρει τη βλάβη, πατώντας το κουμπί που βρίσκεται στο κάτω μέρος της οθόνης"
                size={30}
                color='rgba(13, 156, 104, .8)'
            />
        </View>
    </React.Fragment>
    )    
}