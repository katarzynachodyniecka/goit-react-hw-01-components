import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { Transactions } from './Transaction/Transactions';
import friends from '../utils/friends.json';
import user from '../utils/user.json';
import data from '../utils/data.json';
import transactions from '../utils/transactions.json';
import styles from './App.module.css';

export const App = () => {
  return (
    <div>
      <span className={styles.heading}>Zadanie 1</span>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <span className={styles.heading}>Zadanie 2</span>
      <Statistics title="Upload stats" data={data} />
      <span className={styles.heading}>Zadanie 3</span>
      <FriendList friends={friends} />
      <span className={styles.heading}>Zadanie 4</span>
      <Transactions items={transactions} />
    </div>
  );
};
