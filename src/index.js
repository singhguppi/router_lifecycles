import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter , Route,NavLink,Switch} from 'react-router-dom';
//components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';
import PostItem from './components/post_item';
import Life from './components/lifecycles';
import Conditional from './components/conditional';
import User from './components/user';

const App=()=>{
    return(
        <BrowserRouter>
             <div>
                 
                  <header>
                      <NavLink to='/'>Home</NavLink><br/>
                      <NavLink to='/posts'
                      activeStyle={{color:'red'}}>posts</NavLink><br/>
                      <NavLink to='/profile'>profile</NavLink><br/>
                      <NavLink to='/life'>life</NavLink><br/>
                      <NavLink to='/conditional'>conditional</NavLink><br/>
                      <NavLink to='/user'>user</NavLink>
                      <hr/>
                      </header>   
                <Switch>
                 <Route path="/Posts/:id/:username" component={PostItem}/>
                 <Route path='/Profile' component={Profile}/>
                 <Route path="/Posts"  component={Posts}/>
                 <Route path='/life' component={Life}/>
                 <Route path='/conditional' component={Conditional}/>
                 <Route path='/user' component={User}/>
                 <Route path="/" exact component={Home}/>
                 
                 <Route render={()=> <h3> oops 4O4 </h3>}/>
                 </Switch>
             </div>

        </BrowserRouter>
        
    )
}
ReactDom.render(<App/>,document.querySelector('#root'))

