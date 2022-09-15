type foodProps = {
  food: string[];
};

export default function Food(props: foodProps) {
  const { food } = props;
  return (
    <ul>
      {food.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
