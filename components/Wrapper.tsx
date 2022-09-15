type WrapperProps = {
  children: React.ReactNode;
};

export default function Wrapper(props: WrapperProps) {
  const { children } = props;
  return <section>{children}</section>;
}
