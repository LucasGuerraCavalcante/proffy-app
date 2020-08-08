import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<string[]>([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map(
                    (teacher: Teacher) => {
                        return teacher.id;
                    }
                );

                setFavorites(favoritedTeachersIds);
            }
        })
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFilterSubmit() {
        loadFavorites();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });
        setIsFiltersVisible(false);
        setTeachers(response.data);
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
                            value={subject}
                            onChangeText={text => setSubject(text)}
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
                                    value={week_day}
                                    onChangeText={week_day => setWeekday(week_day)}
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
                                    value={time}
                                    onChangeText={time => setTime(time)}
                                    placeholder="Which hour?"
                                    placeholderTextColor="#C1BCCC"
                                />
                            </View>
                        </View>
                        </>

                        <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
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
                {
                    teachers.map((teacher: Teacher) => {
                        return (
                            <TeacherItem 
                                key={teacher.id} 
                                teacher={teacher} 
                                favorited={favorites.includes(teacher.id)}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default TeacherList;
