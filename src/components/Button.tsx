export type Props = {
  children?: React.ReactNode;
};

const Button = (props: Props) => {
  const { children } = props;

  return (
    <button className="bg-indigo-500 py-2 px-4 rounded shadow text-white m-2">{children}</button>
  );
};

export default Button;
