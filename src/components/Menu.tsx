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
    <div>
      {options.map((option) => {
        const { value, label } = option;

        return (
          <MenuItem onClick={() => onClick(value)} selected={value === selected}>
            {label}
          </MenuItem>
        );
      })}
    </div>
  );
};

export default Menu;
