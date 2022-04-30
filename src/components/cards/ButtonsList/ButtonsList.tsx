import React, {FC} from "react"
import { observer } from "mobx-react-lite"
import StartButton from "../ResetButton/ResetButton"
import SettingsButton from "../SettingsButton/SettingsButton"
import styles from "../cards.module.scss"

interface ICardList {
    setNewEnteredText(newEnteredText: string): void
    hiddenAreaRef: React.RefObject<HTMLTextAreaElement>
    changeMainText: () => void
}

const ButtonsList: FC<ICardList> = ({ hiddenAreaRef, changeMainText,  setNewEnteredText }) => {

    return (
        <div className={styles.cardList}>
            <StartButton
                hiddenAreaRef={hiddenAreaRef}
                setNewEnteredText={setNewEnteredText}
                changeMainText={changeMainText}
            />
            <SettingsButton text="Settings" />
        </div>
    )
}

export default observer(ButtonsList)
