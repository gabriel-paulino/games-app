import { IGame } from '../../interfaces/Game';
import Game from '../Game';

type GameListProps = {
  games: IGame[];
};

function GameList(props: GameListProps) {
  const { games } = props;
  return (
    <div>
      {games.map((game) => (
        <Game game={game} />
      ))}
    </div>
  );
}

export default GameList;
