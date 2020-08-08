import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/diego3g.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}> 
                        Diego Fernandes   
                    </Text>
                    <Text style={styles.subject}> 
                        IT / Programing
                    </Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra ipsum vitae arcu rutrum, non pharetra lectus sodales. Nunc eleifend lobortis auctor. 
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Cost per hour {'  '}
                    <Text style={styles.priceValue}>
                        $ 20
                    </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon}/> */}
                        <Image source={unfavoriteIcon}/>
                    </RectButton>

                    <RectButton style={styles.whatsappButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.whatsappButtonText}>
                            Contact
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;
