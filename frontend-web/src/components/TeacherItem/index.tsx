import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import './styles.css';

export interface TeacherData {
    id: number,
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
};

export interface TeacherItemProps {
    teacherData: TeacherData
};

const TeacherItem: React.FC<TeacherItemProps> = ({ teacherData }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacherData.id,
        })
    }

    return (
        <article className="teacher-item">
        <header>
            <img src={ teacherData.avatar } alt={ teacherData.name } />
            <div>
                <strong>{ teacherData.name }</strong>
                <span>{ teacherData.subject }</span>
            </div>
        </header>

        <p>
            { teacherData.bio }
        </p>

        <footer>
            <p>
                Price/hour
                <strong>$ { teacherData.cost }</strong>
            </p>
            <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacherData.whatsapp}`}>
                <img src={whatsappIcon} alt="Whatsapp" />
                Contact
            </a>
        </footer>
    </article>
    )
}

export default TeacherItem;