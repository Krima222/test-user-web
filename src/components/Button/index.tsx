import classes from './index.module.scss';

type IProps = {
  text: string;
  onClick: () => void;
};

export function Button({ text, onClick }: IProps) {
  return (
    <button onClick={onClick} className={classes.button}>
      {text}
    </button>
  );
}
