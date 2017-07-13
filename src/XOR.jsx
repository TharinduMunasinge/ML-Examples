import React, { Component } from 'react';
import Perceptron from './Perceptron';
import { Trainer } from 'synaptic';

export default class Examples extends Component {
  constructor(props) {
    super(props);
	    let myPerceptron = new Perceptron(2,13,1);
	    myPerceptron.connectLayers();
	    const myTrainer = new Trainer(myPerceptron);
	    const trainer = myTrainer.XOR();
      this.state = {
        perceptron: myPerceptron,
      };
  }
  render() {
    return (
	    <div>
	      <h3>XOR</h3>
        <h4> Implementation </h4>
        <div className='row'>
        <div className='col-md-6'>
        <pre>
          var synaptic = require('synaptic');

          perceptron = new synaptic.Architect.Perceptron(40, 25, 3);

          perceptron.trainer.XOR();

          perceptron.activate([1,0])

        </pre>
      </div>
       </div>
        <h4> Train data set: </h4>
        <table className='table table-bordered'>
          <tbody>
            <tr><th>Input</th><th>Output</th></tr>
          <tr><td>[1,0]</td><td>1</td></tr>
          <tr><td>[0,1]</td><td>1</td></tr>
          <tr><td>[1,1]</td><td>0</td></tr>
          <tr><td>[0,0]</td><td>0</td></tr>
        </tbody>
        </table>

        <h4> Test data: </h4>
        <table className='table table-bordered'>
          <tbody>

            <tr><th>Test Input</th><th>NN output</th><th>Approximation for </th></tr>
            <tr><td>[1,0]</td><td>{this.state.perceptron.activate([1,0])}</td><td>{this.state.perceptron.activate([1,0])>0.5?1:0}</td></tr>
            <tr><td>[0,1]</td><td>{this.state.perceptron.activate([0,1])}</td><td>{this.state.perceptron.activate([0,1])>0.5?1:0}</td></tr>
            <tr><td>[1,1]</td><td>{this.state.perceptron.activate([1,1])}</td><td>{this.state.perceptron.activate([1,1])>0.5?1:0}</td></tr>
            <tr><td>[0,0]</td><td>{this.state.perceptron.activate([0,0])}</td><td>{this.state.perceptron.activate([1,0])>0.5?1:0}</td></tr>
        </tbody>
        </table>
	    </div>
    );
  }
}
