import React from 'react';
import propTypes from 'prop-types';

export default function Users ({ user, repo }) {
    return (
        <div>
            <img src={user.avatar_url} className='userImg' />
            <h3 className='userHeading'>{user.name}</h3>
            <p className='userLocation'>{user.location}</p>
            <p className='userBio'>{user.bio}</p>
            <ul className='userUl'>
                {repo.map((list) => {
                    return (
                        <li key={list.id} className='userLi'>
                            <span className='repoName'>Repo name:</span> {list.name}, <span className='repoId'>Repo id:</span> {list.id}.
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

Users.propTypes = {
    user: propTypes.object,
    repo: propTypes.array
}