import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Favortes() {
    return (
        <View style={styles.container} >
            <PageHeader title="Your favorite teachers" />
        </View>
    )
}

export default Favortes;
