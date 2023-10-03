import React from 'react'

const EyesOnMe = () => {
    const focused = () => {
        console.log('Good!')
    }

    const blurred = () => {
        console.log('Hey! Eyes on me!')
    }

  return (
    <button onFocus={focused} onBlur={blurred}>Eyes on me</button>
  )
}

export default EyesOnMe
