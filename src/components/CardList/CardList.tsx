import React, {FC} from 'react';
import {observer} from 'mobx-react-lite';
import StartButton from '../StartButton/StartButton';
import SettingsButton from '../SettingButton/SettingsButton';
import DataCard from '../DataCard/DataCard';
import letters from '../../store/letters';
import styles from './cardList.module.scss';

interface CardListProps {
    hiddenAreaRef: React.RefObject<HTMLElement>
    changeMainText: () => void
}

const CardList: FC<CardListProps> = observer(({ hiddenAreaRef, changeMainText }) => (
    <div className={styles.cardList}>
        <StartButton hiddenAreaRef={hiddenAreaRef} changeMainText={changeMainText} />
        <DataCard text="Верно" value={letters.currentLetterId} />
        <DataCard text="Неверно" value={letters.mistakesCounter} />
        <SettingsButton text="Settings" />
    </div>
));

export default CardList;
