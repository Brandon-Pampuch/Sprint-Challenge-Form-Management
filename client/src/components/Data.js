import React from 'react';

const Data = (props) => {
    console.log('in data',props)
    return ( 
        <div>
            {props.data && props.data.map(cur => (<h1>cur.name</h1>))}
        </div>

     );
}
 
export default Data;