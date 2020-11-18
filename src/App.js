import React from 'react'
import Header from './components/Header'
import Global from './global'
import Notice from './pages/Notice'

function App() {
  return (
    <div className="App">
      <Global />
      <Header />
      <Notice />
    </div>
  );
}

export default App;
