import React from 'react'
import { ButtonStyle } from './ButtonStyle'

const Button = (props) => {
  
const { addToList , eraseList } = props
    return (
    <>
    
    <ButtonStyle onClick={addToList}>Agregar a la lista</ButtonStyle>
    <ButtonStyle onClick={eraseList}>Borrar la lista</ButtonStyle>
    
    </>
  )
}

export default Button