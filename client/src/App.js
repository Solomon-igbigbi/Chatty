import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import JoinPage from './pages/chat-page/chat-page.component.jsx'
import ChatPage from './pages/chat-page/chat-page.component.jsx'

const App = () => (
  <Router>
    <Route exact path='/' component={JoinPage} />
    <Route path='/chat' component={ChatPage} />
  </Router>
)

export default App;
