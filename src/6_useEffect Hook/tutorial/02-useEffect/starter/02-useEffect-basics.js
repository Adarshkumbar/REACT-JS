import { useState ,useEffect} from 'react';

// useEffect(x, y); x->callback funtion (no async) and y->array 

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };
  sayHello();
  //above code re-rednders and call every btn click =---->state change

// Most of the time we dont need that so we Use useEffect(x,y) i,e
  useEffect(()=>{console.log("hello from useEffect")},[])  // [] ->Empty array makes it to render only once
  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
