import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select'
import { Context } from '../contexts/ContextProvider'
import { Data } from '../data/Data'


const SelectComponent = ({ options }) => {
    const { carDetails, setCarDetails, questionIndex } = useContext(Context)

    const [value, setValue] = useState(null)

    useEffect(() => {
        //Set Value to Null when moving to new question
        setValue(null)
    }, [questionIndex])


    const handleChange = (selectedOption) => {
        setValue(selectedOption);
        setCarDetails(() => {
            return ({ ...carDetails, [Data[questionIndex].label]: selectedOption.value })

        })
    };


    return (
        <form onSubmit={() => { }}>
            <div className='select-container'>
                <label className='select-label'> Car {options.label}:</label>
                <Select
                    className='react-select'
                    isSearchable={true}
                    options={options.data}
                    value={value}
                    onChange={handleChange}


                />
            </div>

        </form>
    )
}

export default SelectComponent