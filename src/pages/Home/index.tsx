import { useQuery } from 'react-query';
import GameList from '../../components/GameList';
import Header from '../../components/Header';
import { IGame } from '../../interfaces/Game';
import { Api } from '../../providers';

function Home() {
  const oneMinute: number = 1000 * 60;
  const { data: games, isFetching } = useQuery<IGame[]>(
    'games',
    async () => {
      const response = await Api.get('games?page=1&quantity=10');

      return response.data;
    },
    { staleTime: oneMinute },
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
