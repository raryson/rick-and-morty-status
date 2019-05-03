import React from 'react';

const Character = ({name, status}) => {
    return (
        <div>
             <p>Character {name} is {status}</p>
        </div>
    )
}

export default Character
