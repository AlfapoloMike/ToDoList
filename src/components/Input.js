import React from 'react'
import InputStyled from './InputStyle'

const Input = (props) => {

    const {inputOnChange, value } = props

  return (
    <>
    <InputStyled type="text" placeholder='Arroz, Cafe, Fideos, Etc.' name='add' value={value} onChange={inputOnChange}/>
    </>
  )
}

export default Input