import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='number'
        defaultValue='1'
        placeholder={placeholder}
        onChange={handleChange}
    />
)