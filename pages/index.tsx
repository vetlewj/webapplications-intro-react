import type { NextPage } from 'next';
import Food from '../components/Food';
import MyComponent from '../components/MyComponent';

const food = ['Pizza', 'Hamburger', 'Coke'];

const Home: NextPage = () => {
  return (
    <>
      <MyComponent title='It still works' />
      <Food food={food} />
    </>
  );
};

export default Home;
