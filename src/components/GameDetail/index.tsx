import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { IGame } from '../../interfaces/Game';

function GameDetail() {
  const params = useParams();
  const gameId = params['*'] as string;
  const queryClient = useQueryClient();
  const [gameDetail, setGameDetail] = useState<IGame>({} as IGame);

  async function doSomething() {
    const currentGames = queryClient.getQueryData<IGame[]>('games');
    const currentGame = currentGames?.find((game) => game.id === gameId);

    if (currentGame) setGameDetail(currentGame);

    await queryClient.invalidateQueries(['games']);
  }

  return (
    <div>
      <h1>{gameId}</h1>
      <p>{gameDetail.name}</p>
      <p>{gameDetail.price}</p>
      <p>{gameDetail.producer}</p>
      <p>{gameDetail.genreId}</p>
      <p>{gameDetail.platformId}</p>
      <button onClick={doSomething} type="submit">
        Fazer alguma coisa
      </button>
    </div>
  );
}

export default GameDetail;
