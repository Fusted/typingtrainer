import React, {FC} from 'react';
import { IButton } from '../../interfaces/interfaces';


const SettingsButton: FC<IButton> = ({text}) => {
  return (
    <div className='button card'>
        {text}
    </div>
  );
};

export default SettingsButton;