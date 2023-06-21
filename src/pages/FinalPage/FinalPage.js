import React, { useContext } from 'react'
import { Context } from '../../contexts/ContextProvider'

const FinalPage = () => {
    const { carDetails } = useContext(Context)

    return (
        <div>
            <h1>We have Identified you car!</h1>
            <div className='final-text'>
                <p>I have {carDetails?.Make ? carDetails?.Make : "[CAR MAKE]"} and the colour is {carDetails?.Colour ? carDetails?.Colour : "[CAR COLOUR]"}</p>
                {carDetails?.Colour === "RED" && <p style={{ color: 'red' }}> THE CARE IS RED! NICE!! </p>}
                <br></br>
                <p>REF: {carDetails?.CODE ? carDetails?.CODE : "[CAR CODE]"}</p>
            </div>
        </div>
    )
}

export default FinalPage