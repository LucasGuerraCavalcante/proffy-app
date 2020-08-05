import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';

function TeacherForm() {
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

                </fieldset>

                <fieldset>
                    <legend>Class info</legend>

                    <Input name="subject" label="Subject" />
                    <Input name="cost" label="Cost per hour" />

                </fieldset>
            </main>
        </div>
    )
}

export default TeacherForm;