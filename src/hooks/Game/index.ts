import { useCallback, useState } from 'react';
import { GameService } from '../../services/Game';
import { IGame } from '../../interfaces/Game';

export const useGame = () => {
  const [games, setGames] = useState<IGame[]>([]);

  const getGames = useCallback(async (page?: number, quantity?: number) => {
    const { status, data } = await GameService.getGames(page, quantity);

    if (status === 200) setGames(data);
  }, []);

  return { games, getGames };
};
