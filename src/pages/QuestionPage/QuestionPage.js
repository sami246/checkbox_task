import React, { useContext } from 'react'
import SelectComponent from '../../components/SelectComponent';
import { Data } from '../../data/Data';
import { Context } from '../../contexts/ContextProvider';
import AppButton from '../../components/AppButton';

const QuestionPage = () => {
    const { questionIndex } = useContext(Context)

    return (
        <div className='container'>
            <h1>Please Fill in the Form Below</h1>
            <SelectComponent options={Data[questionIndex]} />
            <AppButton isCodePage={false} />
        </div>
    )
}

export default QuestionPage