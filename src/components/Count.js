import React from 'react';

export function Count(){
    const [count,setCount] = React.useState(1)

    const onButtonClick = () =>{
           setCount(count+1)
    }
    return(
        <>
        {count}
        <button onClick={onButtonClick}>click</button>
        </>
    )
}