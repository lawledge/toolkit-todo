import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';

import cat from './cat.png';
import './App.css';

const App = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = ({ target: { value } }: { target: object; value: boolean }) => {
    console.log(value);
    // setChecked()
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={cat} className='App-logo' alt='logo' />
        <p>Toolkit todo app</p>

        <InputGroup size='lg' className='mb-3' id='first-checkbox'>
          <InputGroup.Text id='inputGroup-sizing-lg'>Large</InputGroup.Text>
          <InputGroup.Checkbox
            aria-label='Checkbox for following text input'
            onChange={handleCheckboxChange}
            checked={checked}
          />
        </InputGroup>
      </header>
    </div>
  );
};

export default App;
