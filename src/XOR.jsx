import React, { Component } from 'react';
import {Architect, Trainer}from 'synaptic';

export default class Examples extends Component {
  constructor(props) {
    super(props);
	    const myPerceptron = new Architect.Perceptron(2, 3, 1);
      const trainer = new Trainer(myPerceptron);
      const trainingSet = [{
            input: [0,0],
            output: [0]
          },
          {
            input: [0,1],
            output: [1]
          },
          {
            input: [1,0],
            output: [1]
          },
          {
            input: [1,1],
            output: [0]
          },
        ]

      var options = {
        iterations: 100000,
        shuffle: true,
        log:false,
        cost: Trainer.cost.MSE
      };

      trainer.train(trainingSet,options);
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
        <pre>{`
          var synaptic = require('synaptic');

          //setting up the neural network
          network = new synaptic.Architect.Perceptron(2, 13,1);

          //train the neural network with training data
          const trainer = new Trainer(network);
          const trainingSet = [{
                input: [0,0],
                output: [0]
              },
              {
                input: [0,1],
                output: [1]
              },
              {
                input: [1,0],
                output: [1]
              },
              {
                input: [1,1],
                output: [0]
              },
            ]

          const options = {
            iterations: 100000,
            shuffle: true,
            log:false,
            cost: Trainer.cost.MSE
          };
          trainer.train(trainingSet,options)


          //Predict
          perceptron.activate([1,0])
         `
          }
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
            <tr><td>[0,0]</td><td>{this.state.perceptron.activate([0,0])}</td><td>{this.state.perceptron.activate([0,0])>0.5?1:0}</td></tr>
        </tbody>
        </table>
	    </div>
    );
  }
}
