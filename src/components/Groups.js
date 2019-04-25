import React, { Component } from 'react';

class Groups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ["1","2","3","4","5"]
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

export default Groups;
