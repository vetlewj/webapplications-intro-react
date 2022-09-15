import Title from './Title';

type MyComponentProps = {
  title: string;
};

export default function MyComponent(props: MyComponentProps) {
  const { title } = props;
  return (
    <>
      <h1>My First Component</h1>
      <Title title={title} />
    </>
  );
}
