import type { NextPage } from 'next';
import { useState } from 'react';
import Food from '../components/Food';
import MyComponent from '../components/MyComponent';

const food = ['Pizza', 'Hamburger', 'Coke'];

const Home: NextPage = () => {
  const [input, setInput] = useState('');

  return (
    <>
      <MyComponent title='It still works' />
      <Food food={food} />
      <button onClick={() => console.log(input)}></button>
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </>
  );
};

export default Home;
