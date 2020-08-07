import React from  'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import styles from './styles';

function Landing() {
    return (
        <View style={styles.container} >
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Welcome, {'\n'}
                <Text style={styles.titleBold}>
                    How can we help you? 
                </Text>
            </Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Study</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Teach</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.totalConnections}>
                X Connections {' '}
                <Image source={heartIcon} />
            </Text>

        </ View>
    )
}

export default Landing;