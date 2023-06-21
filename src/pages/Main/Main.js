import React from 'react'
import '../QuestionPage/QuestionPage.css'
import { Data } from '../../data/Data';
import { useContext } from 'react';
import FinalPage from '../FinalPage/FinalPage';
import { Context } from '../../contexts/ContextProvider';
import QuestionPage from '../QuestionPage/QuestionPage';
import CodePage from '../CodePage/CodePage';

const Main = () => {
    const NumberOfQuestions = Data.length
    const { questionIndex } = useContext(Context)

    return (
        <div style={{ margin: 50 }}>
            {questionIndex < NumberOfQuestions
                ?
                <QuestionPage />
                :
                questionIndex === NumberOfQuestions

                    ?
                    <CodePage />
                    :
                    <FinalPage />
            }
        </div>
    )
}

export default Main