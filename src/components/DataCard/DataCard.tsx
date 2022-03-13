import React, {FC} from 'react';
import {ICard} from '../../interfaces/interfaces'

const DataCard: FC<ICard> = ({text, value}) => {

  return (
    <div className='card'>
      {text}: {value}
    </div>
  );
}

export default DataCard;