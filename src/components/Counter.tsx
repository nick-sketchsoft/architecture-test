import React from 'react'
import Button from './Button'
import Display from './Display'

const Counter = () => {
    return (
        <div>
            <Display data={0}/>
            <Button/>
        </div>
    )
}

export default Counter
