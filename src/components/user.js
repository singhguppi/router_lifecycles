import React from 'react';
import userHoc from '../hoc/userHoc';
const User=()=>{
    return(
        <div>user1</div>
    )
}
export default userHoc(User,'hello');