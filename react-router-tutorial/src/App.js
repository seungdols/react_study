import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, About, Posts } from './pages'
import Menu from './components/Menu'
import AsyncSplitMe from './components/AsyncSplitMe'

const App = () => {
  return (
    <div>
      <Menu />
      <AsyncSplitMe />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/about/:name" component={About} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  )
}

export default App
