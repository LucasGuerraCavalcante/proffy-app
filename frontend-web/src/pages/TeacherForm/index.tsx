import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';

function TeacherForm() {
    const history = useHistory();

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    function setSchedeuleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(event: FormEvent) {
        event.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Form sent!');
            history.push('/');
        }).catch(() => {
            alert('Something went wrong, verify and try again');
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Sign up to teach" 
                description="First you need to fill this application form"               
            />

            <main>
                <form onSubmit={handleCreateClass} >
                    <fieldset>
                        <legend>Personal info</legend>

                        <Input name="name" label="Name" value={name} 
                            onChange={(event) => {setName(event.target.value)}}
                        />
                        <Input name="avatar" label="Avatar" value={avatar} 
                            onChange={(event) => {setAvatar(event.target.value)}} 
                        />
                        <Input name="whatsapp" label="Whatsapp" value={whatsapp} 
                            onChange={(event) => {setWhatsapp(event.target.value)}} 
                        />
                        <Textarea name="bio" label="Bio" value={bio} 
                            onChange={(event) => {setBio(event.target.value)}} 
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Class info</legend>

                        <Select name="subject" label="Subject"
                            value={subject} 
                            onChange={(event) => {setSubject(event.target.value)}} 
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


                        <Input name="cost" label="Cost per hour" value={cost} 
                            onChange={(event) => {setCost(event.target.value)}} 
                        />

                    </fieldset>

                    <fieldset>
                        <legend>
                            Schedule
                            <button type="button" onClick={addNewScheduleItem}>
                                + Available schedule
                            </button>
                        </legend>

                        { 
                            scheduleItems.map((scheduleItem, index) => {
                                return (
                                    <div key={scheduleItem.week_day} className="schedule-item">
                                        <Select name="week_day" label="Week day" value={scheduleItem.week_day}
                                            onChange={(event) => setSchedeuleItemValue(index, 'week_day', event.target.value)}
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
                                        <Input name="from" label="From" type="time" value={scheduleItem.from}
                                            onChange={(event) => setSchedeuleItemValue(index, 'from', event.target.value)} />         
                                        <Input name="to" label="To" type="time" value={scheduleItem.to}
                                            onChange={(event) => setSchedeuleItemValue(index, 'to', event.target.value)}/>             
                                    </div>
                                )
                            })
                        }

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Warning" />
                            Warning! <br />
                            You must fill all form fields
                        </p>
                        <button type="submit">
                            Send form
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;