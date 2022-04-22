import { useEffect } from 'react';
import GameList from '../../components/GameList';
import Header from '../../components/Header';
import { useGame } from '../../hooks/Game';

function Home() {
  const { games, getGames } = useGame();

  useEffect(() => {
    getGames();
  }, [getGames]);

  return (
    <div>
      <Header />
      <GameList games={games} />
    </div>
  );
}

export default Home;
