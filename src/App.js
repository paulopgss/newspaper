import React from 'react'
import Header from './components/Header'
import Global from './global'
import List from './pages/List'
import Modal from './pages/Modal'

function App() {
  return (
    <div className="App">
      <Global />
      <Header />
      <List />
    </div>
  );
}

export default App;
