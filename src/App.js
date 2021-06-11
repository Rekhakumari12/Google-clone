import React from 'react'
import './App.css'
import Main from './Main'
import { Route, Switch, Redirect } from 'react-router-dom';
function App(){
  return (
    <>
      <Switch>
        <Route path='/gh-pages-url/googleclone' exact component={Main} />
        <Redirect from='/gh-pages-url' exact to='/googleclone'/>
      </Switch>
    </>
  )
}
export default App
