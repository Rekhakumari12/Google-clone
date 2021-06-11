import React from 'react'
import './App.css'
import Main from './Main'
import { Route, Switch, Redirect } from 'react-router-dom';
function App(){
  return (
    <>
      <Switch>
        <Route path='/Google-clone/googleclone' exact component={Main} />
        <Redirect from='*' exact to='/Google-clone/googleclone'/>
      </Switch>
    </>
  )
}
export default App
