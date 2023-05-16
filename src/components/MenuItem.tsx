export type Props = {
  children?: React.ReactNode;
  onClick: () => void;
  selected: boolean;
};

const MenuItem = (props: Props) => {
  const { children, onClick, selected } = props;

  const classes = selected ? 'bg-indigo-500' : 'hover:text-slate-200 text-slate-400';
  return (
    <button onClick={() => onClick()} className={classes + ' rounded-r-lg my-1'}>
      {children}
    </button>
  );
};

export default MenuItem;
