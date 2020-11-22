import React from 'react';
import NodeComponents from './NodeComponents'
import './App.css';
import Header from './Header';
import Tabs from './Tabs';

function App() {
  return (
    <section className='section'>
      <Header />
      <Tabs />
      <NodeComponents />
    </section>
  )
}

export default App;
