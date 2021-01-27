import React from 'react';

import { exchangeCalc } from '../functions/functions';

import './card.styles.css';

const Card = (props) => {
    return (
        <div className='container'>
            <img 
                alt='logo'
                src='https://freepngimg.com/thumb/money/63483-exchange-money-symbol-dollar-currency-rate.png?80x80'
                width='80'
                height='80'
            />
            <h3 className='text'>{props.excode} 1.00 = ZAR {props.rate}</h3>
            <div>
                <h5>LAST UPDATED:</h5>
                <p> {props.update} </p>
                <h5>NEXT UPDATE:</h5>
                <p> {props.next} </p>
                <p> {props.excode} to ZAR</p>
            </div>
            <div>
                <h1 input='rand'>ZAR {exchangeCalc(props.rate, props.exValue).toFixed(2)}</h1>
            </div>
        </div>
    ); 
}

export default Card;