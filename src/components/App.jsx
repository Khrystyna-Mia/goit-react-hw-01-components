import Profile from '../components/Profile/Profile';
import Statistics from '../components/Statistics/Statistics';
import Container from '../components/Container/Container';

export const App = ({ data }) => {
  return (
    <Container>
      <Profile {...data.user} />

      <Statistics title="Upload stats" data={data.statistics} />

      {/* <Friends data={data.friends}/>

      <Transactions items={data.transactions}/> */}
    </Container>
  );
};
