import React from 'react'

import Header from './components/Header'
import Global from './global'
import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <Global />
      <Header />
      <Routes />
    </div>
  );
}

export default App;
