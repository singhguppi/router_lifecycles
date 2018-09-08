import React, {PureComponent} from 'react';
class Life extends PureComponent{
    //1 get default props
    //2 set default state
    state={
        title:'lifecycles'
    }
    //3 before render/jsx
    /*componentWillMount(){
        console.log('3 before jsx')
    }
    componentWillUpdate(){
        console.log('before update')
    }
    componentDidUpdate(){
        console.log('after update')
    }
    shouldComponentUpdate(nextProps,nextState){
       // console.log(nextState)
        return true;
    }
    componentWillReceiveProps(){
        console.log('new props')
    }
    componentWillUnmount(){
        console.log('UNMOUNT')
    }
    */
    
    //4 jsx
render(){
    console.log('RENDER')
   return(
    <div>
        <h3>
          {this.state.title}
        </h3>
        <div onClick={
            ()=>this.setState({
                title:'something else'
            })
        }> CLICK TO CHANGE
        </div>
    </div>
)

}
//5 after jsx
componentDidMount(){
    console.log('after jsx')
}
}
export default Life;