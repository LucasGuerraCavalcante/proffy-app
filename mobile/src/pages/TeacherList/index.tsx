import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function TeacherList() {
    return (
        <View style={styles.container} >
            <PageHeader title="Avaliable teachers" />
        </View>
    )
}

export default TeacherList;
