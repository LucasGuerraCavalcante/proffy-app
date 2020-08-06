import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { TeacherData } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(event: FormEvent) {
        event.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Available teachers">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select name="subject" label="Subject" value={subject}
                        onChange={(event) => { setSubject(event.target.value) }}
                        options={[
                            { value: 'Arts', label: 'Arts' },
                            { value: 'Biology', label: 'Biology' },
                            { value: 'Chemistry', label: 'Chemistry' },
                            { value: 'English', label: 'English' },
                            { value: 'Physics', label: 'Physics' },
                            { value: 'History', label: 'History' },
                            { value: 'Geography', label: 'Geography' },
                            { value: 'Math', label: 'Math' },
                            { value: 'Music', label: 'Music' },
                            { value: 'Spanish', label: 'Spanish' },
                            { value: 'French', label: 'French' },                           
                            { value: 'it', label: 'IT / Programming' },
                            { value: 'Other', label: 'Other' },    
                        ]}
                    />

                    <Select name="week-day" label="Week day" value={week_day}
                        onChange={(event) => { setWeekday(event.target.value) }}
                        options={[
                            { value: '0', label: 'Sunday' },
                            { value: '1', label: 'Monday' },
                            { value: '2', label: 'Tuesday' },
                            { value: '3', label: 'Wednesday' },
                            { value: '4', label: 'Thursday' },
                            { value: '5', label: 'Friday' },
                            { value: '6', label: 'Saturday' },  
                        ]}
                    />
                    <Input type="time" name="time" label="Time" value={time}
                        onChange={(event) => { setTime(event.target.value) }}
                    />   

                    <button type="submit">
                        Search
                    </button>
                </form>
            </PageHeader>

            <main>
                {
                    teachers.map((teacher: TeacherData) => {
                        return <TeacherItem key={teacher.id} teacherData={teacher} />
                    })
                }
            </main>
        </div>
    )
}

export default TeacherList;