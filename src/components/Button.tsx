export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = (props: Props) => {
  const { children, className, ...rest } = props;

  return (
    <button
      {...rest}
      className={className + ' bg-indigo-500 py-2 px-4 rounded shadow text-white my-2'}>
      {children}
    </button>
  );
};

export default Button;
