import React from 'react';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';
function App() {
  
  const add = (x,y) => x + y;
  const substract = (x,y) => x - y; 

  const calculate = (num1, num2, fn) => {
    console.log(num1)
    return fn(num1, num2)
}
console.log(calculate(3,4,add))
console.log(calculate(1,2,substract))

  function decrease(value) {
    value = -1 * value - 3;
  }
  let i = - 1;
  decrease(-1);
  console.log(i)
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

export default App;
