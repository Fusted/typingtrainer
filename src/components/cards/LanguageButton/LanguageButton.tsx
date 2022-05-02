import React, {ChangeEvent, useEffect } from 'react';
import styles from '../cards.module.scss'
import {observer} from "mobx-react-lite";
import settings from "../../../store/settings";

const LanguageButton = () => {

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        settings.setLanguage(e.target.value)
        localStorage.setItem('typing-lan', e.target.value)
    }

    useEffect(() => {
        const language = localStorage.getItem('typing-lan')
        language ? settings.setLanguage(language) : 'en'
    }, [])

    return (
        <select className={styles.button} value={settings.language} onChange={onChange}>
            <option value='ru'>RUS</option>
            <option value='en'>EN</option>
        </select>
    );
};

export default observer(LanguageButton)