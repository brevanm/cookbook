type Props = {
  text: string;
  onChange: (str: string) => void;
  className?: string;
};

const TextField = (props: Props) => {
  const { className, text, onChange } = props;

  const onChangeTemp = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input className={className} type="text" value={text} onChange={onChangeTemp} />;
};

export default TextField;
