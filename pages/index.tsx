import type { NextPage } from 'next';
import Food from '../components/Food';
import MyComponent from '../components/MyComponent';

const food = ['Pizza', 'Hamburger', 'Coke'];

const Home: NextPage = () => {
  return (
    <>
      <MyComponent title='It still works' />
      <Food food={food} />
      <button onClick={() => console.log('clicked')}></button>
      <input type='text' onChange={() => console.log('change')} />
    </>
  );
};

export default Home;
