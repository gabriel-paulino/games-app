import { Link } from 'react-router-dom';
import { IGame } from '../../interfaces/Game';
import { Container, Text } from './styles';

type GameProps = {
  game: IGame;
};

function Game(props: GameProps) {
  const { game } = props;
  return (
    <Container key={game.id}>
      <Text>{game.name}</Text>
      <Text>
        {game.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Text>
      <Text>{game.producer}</Text>
      <Link to={`games/${game.id}`}>{game.name}</Link>
    </Container>
  );
}

export default Game;
