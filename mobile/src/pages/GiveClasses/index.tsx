import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBackground from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
    const { goBack } = useNavigation();

    function navigateBack() {
        goBack();
    }

    return (
        <View style={styles.container} >
            <ImageBackground 
                source={giveClassesBackground} 
                style={styles.content}
                resizeMode='contain'
            >
                <Text style={styles.title}>
                    Would you like to teach?
                </Text>
                <Text style={styles.description}>
                    First you need to register as a teacher on our web platform.
                </Text>
            </ImageBackground>

            <RectButton onPress={navigateBack} style={styles.button}>
                <Text style={styles.buttonText}>
                   Ok 
                </Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;