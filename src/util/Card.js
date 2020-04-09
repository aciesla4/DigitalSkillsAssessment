import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div>
                <input style={{ width: '50px', height: '50px', position: 'absolute', top: '50%', left: '50%' }} type="image" alt="pic" src={require ("../Initial/spyLogo.jpg")} onClick={() => console.log("click")}/>
            </div>
        )
    }
}

export default Card;