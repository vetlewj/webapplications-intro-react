import type { NextPage } from 'next';
import Alert from '../components/Alert';
import Food from '../components/Food';
import MyComponent from '../components/MyComponent';

const food = ['Pizza', 'Hamburger', 'Coke'];

const Home: NextPage = () => {
  return (
    <>
      <MyComponent title='It still works' />
      <Food food={food} />
      <Alert />
    </>
  );
};

export default Home;
