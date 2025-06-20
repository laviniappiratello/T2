import React, { Component } from 'react';

type Props = {};

type State = {};

class AnaliseTop10 extends Component<Props, State> {
  render() {
    return (
      <div className="container">
        <h4>Top 10 que mais consomem</h4>
        <ul className="collection">
          {[...Array(10)].map((_, i) => (
            <li key={i} className="collection-item">
              Cliente {i + 1} -Mais consome
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AnaliseTop10;
