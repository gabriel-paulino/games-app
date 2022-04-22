import { MyButton } from './styles';

interface Props {
  title: string;
  primary?: boolean;
}

function Button({ primary, title }: Props) {
  return <MyButton primary={primary}>{title}</MyButton>;
}

Button.defaultProps = {
  primary: false,
};

export default Button;
