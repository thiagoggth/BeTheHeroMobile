import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Detail = () => {

    const navigation = useNavigation();

    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "nome do caso" com o valor de 120 ';

    const navigateBack = () => {
        navigation.goBack();
    }

    const sendMail = () => {
        MailComposer.composeAsync({
            subject: 'Heroi do caso: teste',
            recipients: ['thiagoggth@gmail.com'],
            body: message,
        })
    }

    const sendWhatsapp = () => {
        Linking.openURL(`whatsapp://send?phone=67998139791&text=${message}`)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color='#E02041' />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG: </Text>
                <Text style={styles.incidentValue}>APAD </Text>

                <Text style={styles.incidentProperty}>CASO: </Text>
                <Text style={styles.incidentValue}>caso 1 </Text>

                <Text style={styles.incidentProperty}>VALOR: </Text>
                <Text style={styles.incidentValue}>120 </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi dese caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.action, { marginLeft: 4 }]} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Detail;