import MenuItem from './MenuItem';

type option = {
  value: string;
  label: string;
};

type Props = {
  options: option[];
  selected: string;
  onClick: React.Dispatch<React.SetStateAction<string>>;
};

const Menu = (props: Props) => {
  const { onClick, options, selected } = props;

  return (
    <nav className="bg-slate-800 w-60 flex flex-col h-screen p-2 border-r border-slate-700 absolute left-0">
      {options.map((option) => {
        const { value, label } = option;

        return (
          <MenuItem key={value} onClick={() => onClick(value)} selected={value === selected}>
            {label}
          </MenuItem>
        );
      })}
    </nav>
  );
};

export default Menu;
