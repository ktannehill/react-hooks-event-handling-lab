import React from 'react'

function Keypad (){

    const logPass = () => {
        console.log('Entering password...')
    }

    return (
        <input type="password" onChange={logPass}/>
    )
}

export default Keypad;