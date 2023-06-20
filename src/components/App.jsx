import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { Transactions } from './Transactions/Transactions';
import friends from '../utils/friends.json';
import user from '../utils/user.json';
import data from '../utils/data.json';
import transactions from '../utils/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
