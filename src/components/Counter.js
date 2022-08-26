import React, { useState } from 'react'
import Button from './Button';
import Input from './Input';
import List from './List';

const Counter = () => {
    // estados iniciales
    const initialList = []
    // hooks
    const [input, setInput] = useState({
        add:''
    });
    const [list, setList] = useState(initialList)
    // variables

    const { add } = input
    // funciones
    const inputOnChange = (e)=>{
        setInput({...input, 
        [e.target.name]: e.target.value});
    }
    const addToList = () =>{
        setList([...list,add]);
        
    }
    const eraseList = () =>{
        setList([...initialList])
    }

    return (
    <>
    <Input value={add} inputOnChange={inputOnChange} />
    <Button eraseList={eraseList} addToList={addToList} />
    <List array={list} />
    </>
  )
}

export default Counter