import React from 'react';
import StartButton from '../StartButton/StartButton';
import SettingsButton from '../SettingButton/SettingsButton';
import DataCard from '../DataCard/DataCard';
import letters from '../../store/letters';
import { observer } from 'mobx-react-lite';
import './cardList.scss'

const CardList = observer(() => {
  return (
    <div className='cardList'>
      <StartButton text={'Start'}/>
      <DataCard text={'Верно'} value={letters.currentLetterId}/>
      <DataCard text={'Неверно'} value={letters.mistakesCounter}/>
      <SettingsButton text={'Settings'}/>
    </div>
  );
})

export default CardList;

