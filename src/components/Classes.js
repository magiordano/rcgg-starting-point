import React, { Component } from 'react';

class Classes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ["1","2","3"]
        };
    }
    render() {
        return (
            <div>
         <ul>
            {this.state.items.map(item => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
            </div>
        );
    }
}

export default Classes;
