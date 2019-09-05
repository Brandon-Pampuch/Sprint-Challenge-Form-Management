import React from 'react';

const Data = (props) => {
   console.log('in data',props)
    return ( 
        <div>
            <h1>data</h1>
            {props.data && props.data.data.map(cur => (<h1>{cur.name}</h1>))}
        </div>

     );
}
 
export default Data;