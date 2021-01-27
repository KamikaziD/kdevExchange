import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.exchange.map(exchange => (
            <Card key={exchange.id} monster={exchange} />
        ))}
    </div>
);