import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{marginTop:"2px", overflowY:"scroll", border:"1px solid black", height:"450px",overflowX:"hidden" }}>
            { props.children }
        </div>
    );
}

export default Scroll;