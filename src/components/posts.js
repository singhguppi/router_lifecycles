import React from 'react';
import { } from 'react-router-dom';
const Posts=()=>{
    //const ids=[
       // {id:'1',name:'post 1'},
       // {id:'2',name:'post 2'},
       // {id:'3',name:'post 3'}
  //  ]
    /*const list=ids.map(item=>{
        return(
            <span key={item.id}>
            <link to={item.id}>{item.name}></link><br/>
            </span>
        )
    })*/
    return [
        <div key='1'>hello</div>,
        <div key='2'> i  am</div>,
       <div key='3'> react app</div>
    ]
}


export default Posts;

