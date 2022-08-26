import React from 'react'
import ListStyled from './ListStyle'

const List = (props) => {
    const {array} = props
  return (
    <>
    <ListStyled>
        <p>Lista de compras del supermercado</p>
        {array.map((item,i)=><li key={i}>{item}</li>)}
    </ListStyled>
    </>
  )
}

export default List