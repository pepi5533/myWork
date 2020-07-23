import React from 'react';
import Proptypes from 'prop-types';

export default function Input({ myApi, mySearch }) {
    return (
        <div>
            <h3 className='inputHeading'>Enter a Github username:</h3>
            <form onSubmit={myApi} className='inputForm'>
                <input type='text' onChange={mySearch} />
                <input type='submit' value='Enter' />
            </form>
        </div>
    )
}

Input.propTypes = {
    myApi: Proptypes.func,
    mySearch: Proptypes.func
}