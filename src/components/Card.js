import React from 'react';

const Card = (props) => {
    const {id, name, email} = props; //Destructuring
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}`} alt="robots" width="200px" height="200px"/>
            <div>
                <h2>{name} </h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;