type WrapperProps = {
  children: React.ReactNode;
};

export default function Wrapper(props: WrapperProps) {
  const { children } = props;
  return <section className='flex'>{children}</section>;
}
