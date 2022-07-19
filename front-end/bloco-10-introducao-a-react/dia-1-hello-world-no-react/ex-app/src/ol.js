import React, { Component  } from 'react';

const array = ['juninho', 'fresco', 'quela', 'test', 'zorra']
    const Task = (value) => {
      return (
          <li>{value}</li>
      );
    }

 class ReturnList extends Component {
    render() {  
    const maps = array.map((arr) => Task(arr))
    return <ol>{maps}</ol>
    }
  }

  export default ReturnList
  