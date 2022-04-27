import GameList from '../../components/GameList';
import Header from '../../components/Header';
import { useFetch } from '../../hooks';
import { IGame } from '../../interfaces/Game';

function Home() {
  const { data: games, isFetching } = useFetch<IGame[]>(
    `games?page=1&quantity=10`,
  );

  return (
    <>
      <Header />
      {isFetching && <p>Carregando dados API...</p>}
      <GameList games={games ?? []} />
    </>
  );
}

export default Home;
