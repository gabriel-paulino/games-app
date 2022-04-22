import { IGame } from '../../interfaces/Game';
import { Api } from '../../providers';

function getGames(page?: number, quantity?: number) {
  const defaultPage = page || 1;
  const defaultQuantity = quantity || 5;

  return Api.get<IGame[]>(
    `games?page=${defaultPage}&quantity=${defaultQuantity}`,
  );
}

export const GameService = { getGames };
