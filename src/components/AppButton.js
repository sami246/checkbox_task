import React, { useContext } from 'react'
import { Context } from '../contexts/ContextProvider'

const AppButton = ({ isCodePage }) => {
    const { setQuestionIndex } = useContext(Context)

    const handleSubmit = () => {

        setQuestionIndex((prev) => (prev + 1))
    }
    return (
        <button onClick={() => { handleSubmit() }} title={isCodePage ? "DONE" : "NEXT"} >{isCodePage ? "DONE" : "NEXT"}</button>
    )
}

export default AppButton