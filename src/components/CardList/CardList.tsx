import React, {FC} from 'react';
import StartButton from '../StartButton/StartButton';
import SettingsButton from '../SettingButton/SettingsButton';
import DataCard from '../DataCard/DataCard';
import letters from '../../store/letters';
import { observer } from 'mobx-react-lite';
import styles from './cardList.module.scss'


interface CardListProps {
    startButtonRef:  React.RefObject<HTMLInputElement>
}

const CardList: FC<CardListProps> = observer(({startButtonRef}) => {

  return (
    <div className={styles.cardList}>
      <StartButton startButtonRef={startButtonRef}/>
      <DataCard text={'Верно'} value={letters.currentLetterId}/>
      <DataCard text={'Неверно'} value={letters.mistakesCounter}/>
      <SettingsButton text={'Settings'}/>
    </div>
  );
})

export default CardList;

