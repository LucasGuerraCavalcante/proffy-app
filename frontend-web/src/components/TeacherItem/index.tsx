import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img></img>
            <div>
                <strong>Test Test</strong>
                <span>Test Test</span>
            </div>
        </header>

        <p>
            AKdaskflk aslfkalskflak sflkal skflask flkas fsgdh
            <br />
            AKdaskflk aslfkalskflak sflkal skflask flkas fsgdh dgfg hdfhfgjj gj
            <br />
        </p>

        <footer>
            <p>
                Price/hour
                <strong>$ 15,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp" />
                Contact
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;