import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';

import Modal from './Modal';

export default function CommentScreen(props) {
    const data = props.route.params
    const { navigation } = props
    const [value, onChangeText] = useState('');
    async function onSubmit() {
        try {
            // Uncomment when ready to deploy
            await axios.post('https://api.atmacom.crassus.tech/v1/equipment/complain', {
                id: data.uuid,
                comment: value
            })
            alert('Το σχόλιο σας απόσταλθηκε στην αρμόδια υπηρεσία. Ευχαριστούμε πολύ.')
        } catch (e) {
            console.log('Error sending complain:', e)
            alert('Το σχόλιο απέτυχε να αποστάλει. Παρακαλώ προσπαθήστε αργότερα')
        } finally {
            navigation.navigate('Home')
        }
    }
    const styles = StyleSheet.create({
        image: {
            flex: 2,
            width: "80%",
            opacity: 0.8,
            resizeMode: "contain"
        },
        imageBackground: {
            flex: 1,
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: 'center'
        },
        commentBox: {
            color: "#ffff",
            borderWidth: 1,
            textAlign: "center",
            borderColor: "rgb(151, 203, 97)",
            height: 50,
            width:'70%'
        },
        commentInfoSubmit: {
            alignItems:'center',
            flex: 1
        },
        commentInfo: {
            flexDirection: 'row',
        },
        modal:{
            alignSelf:'center'
        }
    })
    return (
        <ImageBackground style={styles.imageBackground} source={require('../assets/app-green-bg.png')}>
            <Image style={styles.image} source={{ uri: data.imageUrl }} />
            <View style={styles.commentInfoSubmit} >
                <View style={styles.commentInfo}>
                    <TextInput
                        multiline={true}
                        style={styles.commentBox}
                        placeholder="Προσθήκη βλάβης"
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                    <Modal
                        style={styles.modal}
                        text="Αναφέρετε την βλάβη του οργάνου που σκανάρατε και στείλτε το στις αρμόδιες υπηρεσίες, πατώντας το εικονίδιο αποστολής κάτω από το πλαίσιο αναφοράς"
                        iconModal={<View style={styles.fancyAlert}><Image resizeMode="contain" source={require('../assets/icon.png')} /></View>}
                        size={20}
                        color='#fff'
                    />
                </View>

                <View>
                    < TouchableOpacity
                        onPress={() => onSubmit()}
                    >
                        <Entypo name="paper-plane" size={40} color="#fff" />
                    </ TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}
