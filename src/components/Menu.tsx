import MenuItem from './MenuItem';

type Props = {
  options: string[];
  selected: string;
  onClick: React.Dispatch<React.SetStateAction<string>>;
};

const Menu = (props: Props) => {
  const { onClick, options, selected } = props;

  return (
    <nav className="bg-slate-800 w-60 flex flex-col h-screen p-2 border-r border-slate-700 absolute left-0">
      {options.map((option) => {

        return (
          <MenuItem key={option} onClick={() => onClick(option)} selected={option === selected}>
            {option}
          </MenuItem>
        );
      })}
    </nav>
  );
};

export default Menu;
