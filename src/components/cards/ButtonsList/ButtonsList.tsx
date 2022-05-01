import React, {FC} from "react"
import StartButton from "../ResetButton/ResetButton"
import SettingsButton from "../SettingsButton/SettingsButton"
import styles from "../cards.module.scss"

interface ICardList {
    hiddenAreaRef: React.RefObject<HTMLTextAreaElement>
    changeMainText: () => void
}

const ButtonsList: FC<ICardList> = ({ hiddenAreaRef, changeMainText }) => {

    return (
        <div className={styles.cardList}>
            <StartButton
                hiddenAreaRef={hiddenAreaRef}
                changeMainText={changeMainText}
            />
            <SettingsButton text="Settings" />
        </div>
    )
}

export default ButtonsList
