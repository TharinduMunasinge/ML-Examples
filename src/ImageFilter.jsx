import React, { Component } from 'react';
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
          <div className='col-md-6' id='output-div'><p>Train output</p><img src='/assets/images/cat_blur.png' id='output'></img></div>
        </div>
        <hr></hr>
          <div className="row">
          <div className="col-md-6" id='original-div'><p>Test Input</p><img src='/assets/images/cat_original.png' id='original'></img></div>
            <div className="col-md-6"><p>Test output</p><canvas id='canvas-demo3'>></canvas></div>
          </div>
            <div >Iterations: <span id='iterations'></span></div>
        <button className="button btn-danger" onClick={()=>imagefil({},200)}> Train </button>
      </div>
    );
  }
}
