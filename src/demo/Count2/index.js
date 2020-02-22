import React, { useState } from 'react';
// state异步问题?
// same count before & after: means async
// even after 3 seconds, not change as well(how to solve?)
const Count = () => {
  const [state, setState] = useState({ title: '计数器', count: 0 });
  const onChange = () => {
    console.log('before setState')
    console.log(state);
    setState({...state, count: 1 + state.count});
    console.log('after setState')
    console.log(state);
    setTimeout(() => {
      console.log('delay 1s:');
      console.log(state)
    }, 3000);
  };
  return <p style={{ borderBottom: '2px solid #eee', paddingBottom: `20px` }} onClick={onChange}>计数器2: {state.count}</p>;
};
export default Count;
