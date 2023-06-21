import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [carDetails, setCarDetails] = useState(null)
    const [questionIndex, setQuestionIndex] = useState(0)


    return (
        <Context.Provider
            value={{
                carDetails, setCarDetails,
                questionIndex, setQuestionIndex
            }}>
            {children}
        </Context.Provider>
    );
};