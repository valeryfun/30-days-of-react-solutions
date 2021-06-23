import React, {useState} from 'react'
import {Button, Card} from 'react-bootstrap'
import Day3FormContainer from '../components/Day3FormContainer'

const Day4 = () => {
    const [randomColor, setRandom] = useState('0')

    const handleClick = () => {
        let str = '0123456789abcdef'
        let color = '#'
        for (let i=0; i<6; i++){
            let index = Math.floor(Math.random() * str.length) 
            color += str[index]
            console.log(color)
        }
        setRandom(color)
    }

    return (
        <Day3FormContainer>
            <h2 className='py-3'>Day 4 Solution</h2>
            <Button variant='success' onClick={handleClick} block>Generate Color</Button>
            <Card style={{background:randomColor}} className='day3-form'>
                {randomColor}
            </Card>
        </Day3FormContainer>
    )
}

export default Day4
