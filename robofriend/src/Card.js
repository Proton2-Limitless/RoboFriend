/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Card = ({id,name,email})=>{
    return (
        <div className='tc bg-light-green dib br3pa3 ma2 grow bw2 shadow5'>
            <img alt='robots' src={`https://robohash.org/${id}?200*200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card