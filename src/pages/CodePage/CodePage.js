import React, { useContext, useEffect } from 'react'
import AppButton from '../../components/AppButton'
import { Context } from '../../contexts/ContextProvider'

const CodePage = () => {
    const { carDetails, setCarDetails } = useContext(Context)

    useEffect(() => {
        const min = 1000;
        const max = 9999;
        const rand = Math.floor(min + Math.random() * (max - min));
        setCarDetails(() => {
            return ({ ...carDetails, CODE: rand })

        })

    }, [])



    return (
        <div>
            <h1>Thanks for Answering!</h1>
            <p>Your CODE: {carDetails?.CODE}</p>
            <AppButton isCodePage={true} />
        </div>

    )
}

export default CodePage