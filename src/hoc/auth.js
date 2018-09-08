import React from 'react';
const Auth=(props)=>{
    const pass='password123';
    if(pass!=='password12'){
        return <h3>sorry you are not authorised</h3>
        

    }
    else{
        return props.children;
    }
}
    

export default Auth;


