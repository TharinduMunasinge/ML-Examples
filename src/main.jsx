import React from 'react';
import { render } from 'react-dom';
import ImageFilter from './ImageFilter.jsx'
import XOR from './XOR.jsx'
import jquery from 'jquery'

import { BrowserRouter, Route , Link} from 'react-router-dom'

const emptyBody=()=>(<div></div>);

const App = () => (
  < BrowserRouter>
    <div className='container'>
    <div className="page-header">
        <h1>Neural Network examples</h1>
        <p className="lead">using Synaptic.js</p>
      </div>
      <ul>
        <li><Link to="/xor">XOR</Link></li>
        <li><Link to="/imagefilter">Image Fiters</Link></li>
        <li><Link to="/color">Color Picker</Link></li>
      </ul>
      <Route exact path="/" component={emptyBody}/>
      <Route path="/xor" component={XOR}/>
      <Route path="/imagefilter" component={ImageFilter}/>
    </div>
  </ BrowserRouter>
)

export default App
