import React, {ChangeEvent, createRef, FC} from 'react';
import { observer } from 'mobx-react-lite';
import letters from '../../store/letters';
import styles from './input.module.scss'

const Input = observer(React.forwardRef<HTMLInputElement>((_, ref) => {

  const onTest = (e:ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  console.log(letters.status)
  return (
      <input
          onChange={onTest}
          // hidden={true}
          ref={ref}
          className={styles.input}
          autoFocus={letters.status}
          type='text'
      />
  );
}))

export default Input;