/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from './Card'

const CardList = ({robots})=> {
    const cardComponent = robots.map((user,index)=>{
        return (
            <Card key={index} id={user.id} name={user.name} email={user.email} />
        )
    })
    return (
        <div>
            <div>
                {cardComponent}
            </div>
        </div>
    )
}

export default CardList