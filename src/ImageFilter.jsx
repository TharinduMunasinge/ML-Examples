import React, { Component } from 'react';
import Perceptron from './Perceptron';
import { Trainer } from 'synaptic';
import imagefil from './imageFilter.js'
export default class ImageFilter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
	      <h3>Image Filters</h3>
        <div className="row">
          <div className='col-md-6' id='input-div'><p>Train input</p><img src='/assets/images/cat.png' id='input'></img></div>
          <div className='col-md-6' id='output-div'><p>Train output</p><img src='/assets/images/cat_grayscale.png' id='output'></img></div>
        </div>
        <hr></hr>
          <div id='original-div'><p>Test Input</p><img src='/assets/images/cat_original.png' id='original'></img></div>
            <div ><p>Test output</p><canvas id='canvas-demo3'>></canvas></div>
            <div id='iterations'></div>
        <button onClick={()=>imagefil({},200)}> Train </button>
      </div>
    );
  }
}
