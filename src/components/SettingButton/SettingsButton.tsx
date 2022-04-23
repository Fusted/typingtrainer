import React, {FC} from 'react';
import styles from '../CardList/cardList.module.scss'

interface IButton {
  text?: string
}

const SettingsButton: FC<IButton> = ({text}) => {
    return (
        <div className={styles.button}>
            {text}
        </div>
    );
};

export default SettingsButton;