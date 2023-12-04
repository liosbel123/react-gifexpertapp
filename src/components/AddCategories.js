import React, { useState } from 'react'
import PropTypes from "prop-types";

const AddCategories = ({setCategories}) => {
    // console.log(setCategories);
    const [value, setValue] = useState('');
    const handleInputChange = (e)=>{
        // console.log(e.target.value);
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.trim().length > 2){
            setCategories((v) => [value, ...v]);
            setValue('');
        }
    }
  return (
    <form onSubmit={handleSubmit}>
    <input
        type='text'
        placeholder='Add Category'
        value={value}
        onChange={handleInputChange}
    />
    </form>
  )
}

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategories
