/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from "react"
import Button from "packages/Button"
import { disposeAction } from "atoms/dispose"
import { useAction } from "@reatom/npm-react"

export interface Props {
    focusArea: VoidFunction
}

const ResetButton: FC<Props> = ({ focusArea }) => {
    const dispose = useAction(disposeAction)

    const reset = (): void => {
        dispose()
        focusArea()
    }

    const onKeyReset = (event: KeyboardEvent) => {
        if (event.code === "Enter") {
            reset()
        }
    }

    useEffect(() => {
        focusArea()
        document.addEventListener("keyup", onKeyReset)
        return function cleanup() {
            document.removeEventListener("keyup", onKeyReset)
        }
    }, [focusArea, onKeyReset])

    return <Button text={"Reset"} onClick={reset} />
}

export default ResetButton
