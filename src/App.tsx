import React, { useState, ChangeEvent, useEffect } from 'react';
import { InputGroup } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { decrement, increment, counterSlice, selectCounterValue } from './store/counterSlice';

import cat from './cat.png';
import './App.css';

const App = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);
    setChecked(!checked);
  };

  // const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  // const count = useAppSelector(state => state.counter);
  const count = useAppSelector(selectCounterValue);

  console.log(count);
  useEffect(() => {
    if (count) console.log(count);
  }, [count]);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={cat} className='App-logo' alt='logo' />
        <p>Toolkit todo app</p>

        <InputGroup size='lg' className='mb-3' id='first-checkbox'>
          <button onClick={() => dispatch(decrement())}>-</button>

          <InputGroup.Text id='inputGroup-sizing-lg'>{count}</InputGroup.Text>
          {/* <InputGroup.Checkbox
            aria-label='Checkbox for following text input'
            onChange={handleCheckboxChange}
            checked={checked}
          /> */}
          <button onClick={() => dispatch(increment())}>+</button>
        </InputGroup>
      </header>
    </div>
  );
};

export default App;
