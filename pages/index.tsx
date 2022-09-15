import type { NextPage } from 'next';
import MyComponent from '../components/MyComponent';

const food = ['Pizza', 'Hamburger', 'Coke'];

const Home: NextPage = () => {
  return (
    <>
      <MyComponent title='It still works' />
      <ul>
        {food.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
