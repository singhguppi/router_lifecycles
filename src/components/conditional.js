import React from 'react';
const Conditional=()=>{
    const value=true;
    return(
        <div>
            {value=== true ? <div> helo its true </div>:
             null   }
         </div>
            
    )
}
export default Conditional;


