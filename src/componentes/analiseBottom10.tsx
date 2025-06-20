import React, { Component } from 'react';

type Props = {};

type State = {};

class AnaliseBottom10 extends Component<Props, State> {
  render() {
    return (
      <div className="container">
        <h4>10 que menos consomem</h4>
        <ul className="collection">
          {[...Array(10)].map((_, i) => (
            <li key={i} className="collection-item">
              Cliente {i + 1} -Menos consome
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AnaliseBottom10;
