import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }
      
    return (
        <View style={styles.container} >
            <PageHeader 
                title="Avaliable teachers"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible} >
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}
            >

            {
                isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>
                            Subject
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Which subject?"
                            placeholderTextColor="#C1BCCC"
                        />
                        <>
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>  
                                    Week day
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Which day?"
                                    placeholderTextColor="#C1BCCC"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>  
                                    Schedule
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Which hour?"
                                    placeholderTextColor="#C1BCCC"
                                />
                            </View>
                        </View>
                        </>

                        <RectButton style={styles.submitButton}>
                            <Text style={styles.submitText}>
                                Filter
                            </Text>
                        </RectButton>
                    </View>
                )
            }

            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 24
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

export default TeacherList;
