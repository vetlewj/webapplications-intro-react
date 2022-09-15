import Title from './Title';
import Wrapper from './Wrapper';

type MyComponentProps = {
  title: string;
};

export default function MyComponent(props: MyComponentProps) {
  const { title } = props;
  return (
    <>
      <h1>My First Component</h1>
      <Wrapper>
        <Title title={title} />
      </Wrapper>
    </>
  );
}
