import React from 'react';
import { hydrate, render } from 'react-dom';

import Rust from './src/wasm/hasher';

class Mapp extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      hash: ''
    }
  }
  render() {
    return(
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let input = e.target.querySelector('[name="inputText"]');
            let inputText = input.value;
            let table = e.target.querySelector('tbody');

            input.value = '';

            Rust.then((api) => {
              table.innerHTML += '<tr><td>' + api.hash(inputText.toString()) + '</td></tr>'
            })
          }}>
          <table>
            <tbody></tbody>
          </table>
          <input type='text' name='inputText' />
          <button type='submit'>Hash</button>
        </form>
      </div>
    )
  }
}

render(<Mapp/>, document.getElementById('root'));
