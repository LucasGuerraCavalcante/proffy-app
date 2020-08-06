import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Sign up to teach" 
                description="First you need to fill this application form"               
            />

            <main>
                <fieldset>
                    <legend>Personal info</legend>

                    <Input name="name" label="Name" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Bio" />
                </fieldset>

                <fieldset>
                    <legend>Class info</legend>

                    <Select name="subject" label="Subject"
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


                    <Input name="cost" label="Cost per hour" />

                </fieldset>

                <fieldset>
                    <legend>
                        Schedule
                        <button type="button" onClick={addNewScheduleItem}>
                            + Available schedule
                        </button>
                    </legend>

                    { 
                        scheduleItems.map(scheduleItem => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select name="week-day" label="Week day"
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
                                    <Input name="from" label="From" type="time" />         
                                    <Input name="to" label="To" type="time" />             
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
                    <button type="button">
                        Send form
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;