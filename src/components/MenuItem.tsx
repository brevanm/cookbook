export type Props = {
  children?: React.ReactNode;
  onClick: () => void;
  selected: boolean;
};

const MenuItem = (props: Props) => {
  const { children, onClick, selected } = props;

  const classes = selected
    ? 'bg-indigo-500'
    : 'hover:text-slate-200 text-slate-400 hover:bg-slate-700';

  return (
    <button onClick={() => onClick()} className={classes + ' rounded-lg my-1 py-1'}>
      {children}
    </button>
  );
};

export default MenuItem;
