import React, {FC} from "react"
import ResetButton from "../ResetButton/ResetButton"
import LanguageButton from "../LanguageButton/LanguageButton"
import styles from "../cards.module.scss"


interface ICardList {
    hiddenAreaRef: React.RefObject<HTMLTextAreaElement>
    changeMainText: () => void
}

const ButtonsList: FC<ICardList> = ({ hiddenAreaRef, changeMainText }) => {

    return (
        <div className={styles.cardList}>
            <ResetButton
                hiddenAreaRef={hiddenAreaRef}
                changeMainText={changeMainText}
            />
            <LanguageButton />
        </div>
    )
}

export default ButtonsList
