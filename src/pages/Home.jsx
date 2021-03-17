import React, {useState, useEffect} from 'react';
import moment, { suppressDeprecationWarnings } from 'moment';

import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import {randomNumberGen, reqTime} from '../utils'
import {db} from '../firebase/config'

const initialState = []

function Home() {
    const [numbers, setNumbers] = useState(initialState)
    const [time, setTime] = useState([])
    const [date, setDate] = useState([])
    const [intervalCheck, setIntervalCheck] = useState(false)

    //function to generate random numbers
    const lotteryNumbers = () => {
        let arr = [];
        for(var i = 0; i<6; i++){
            arr.push(randomNumberGen())
        }
        return arr
    }

    //function to check interval every minute
    useEffect(() => {
        const toggle = () => !intervalCheck
        const interval = setInterval(() => {
            setIntervalCheck(toggle());
          }, 60000);
    }, [intervalCheck])

    // 900000 this is 15 min in milli sec
    useEffect(() => {
        var format = 'hh:mm:ss a'
        var nineAM = moment('09:00:00 am', format)
        var ninePM = moment('09:00:00 pm', format) 
        var currentDate = moment().format('YYYY-MM-DD')
        var currentTime = moment().format('hh:mm a') 
        if(moment().isBetween(nineAM, ninePM)){
           if(reqTime.includes(currentTime)){
                setTime([...currentTime])
                setDate([...currentDate])
                setNumbers([...lotteryNumbers()])
           }
        }
    }, [intervalCheck])

    useEffect(() =>{
        db.collection("2021").doc(`${date}`).set({
            time: {time},
            date:{date},
            numbers: {numbers}
        })
    }, [numbers])

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title className='text-center'> <h1>Contact For Result SMS and Customer Care</h1> </Card.Title>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Draw Time</th>
                            <th>Sangam</th>
                            <th>Chetak</th>
                            <th>Super</th>
                            <th>Delux</th>
                            <th>Fate Line</th>
                            <th>Diamond</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th>{time}</th>
                            {numbers.map((ele)=>{
                                return <th>{ele}</th>
                            })}
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Home;