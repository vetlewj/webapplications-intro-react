import type { NextPage } from 'next';
import { useState } from 'react';
import Alert from '../components/Alert';
import Food from '../components/Food';
import MyComponent from '../components/MyComponent';

const food = ['Pizza', 'Hamburger', 'Coke'];

const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <MyComponent title='It still works' />
      <Food food={food} />
      <Alert input={inputValue} setInput={setInputValue} />
      <p>{inputValue}</p>
    </>
  );
};

export default Home;
