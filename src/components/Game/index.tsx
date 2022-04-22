import React, { Fragment } from 'react';
import { IGame } from '../../interfaces/Game';
import { Text } from './styles';

type GameProps = {
  game: IGame;
};

function Game(props: GameProps) {
  const { game } = props;
  return (
    <Fragment key={game.id}>
      <Text>{game.name}</Text>
      <Text>
        {game.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Text>
      <Text>{game.producer}</Text>
      <Text>{game.platformId}</Text>
      <Text>{game.genreId}</Text>
    </Fragment>
  );
}

export default Game;
