import React, { useCallback, useEffect } from "react"
import { disposeAction } from "atoms/dispose"
import { useAction } from "@reatom/npm-react"
import Button from "packages/Button"

export interface Props {
    focusArea: VoidFunction
}

const ResetButton: React.FC<Props> = ({ focusArea }) => {
    const dispose = useAction(disposeAction)

    const reset = useCallback((): void => {
        dispose()
        focusArea()
    }, [dispose, focusArea])

    const onKeyReset = useCallback(
        (event: KeyboardEvent) => {
            if (event.code === "Enter") {
                reset()
            }
        },
        [reset]
    )

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
