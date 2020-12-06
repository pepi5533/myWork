import React from 'react';

function Generate({ person }) {

    return(
        <div>
            <p className='name'> <b>Name:</b> {person.results[0].name.first} {person.results[0].name.last} </p>
            <p className='country'> <b>Country:</b> {person.results[0].location.country}</p>
            <p className='city'> <b>City:</b> {person.results[0].location.city}</p>
            <p className='gender'> <b>Gender:</b> {person.results[0].gender}</p>
            <p className='age'> <b>Age:</b> {person.results[0].dob.age}</p>
            <p className='email'> <b>Email:</b> {person.results[0].email}</p>
            <img className='img' src={person.results[0].picture.large} alt='Couldnt load image' />
            <p className='refresh'><b>Refresh to generate a new person</b></p>
        </div>
    )
}

export default Generate;