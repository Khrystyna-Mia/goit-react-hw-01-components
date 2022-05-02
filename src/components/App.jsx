import Profile from '../components/Profile/Profile';
import Statistics from '../components/Statistics/Statistics';
import FriendList from '../components/FriendList/FriendList';
import Transactions from '../components/Transactions/Transactions';
import Container from '../components/Container/Container';

export const App = ({ data }) => {
  return (
    <Container>
      <Profile {...data.user} />

      <Statistics title="Upload stats" data={data.statistics} />

      <FriendList friends={data.friends} />

      <Transactions items={data.transactions} />
    </Container>
  );
};
