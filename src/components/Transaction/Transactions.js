import PropTypes from 'prop-types';
import { TransactionRecord } from './TransactionRecord';
import styles from './Transactions.module.css';

export const Transactions = ({ items }) => {
  return (
    <table className={styles['transaction-history']}>
      <thead>
        <tr className={styles.tops}>
          <th className={styles.top}>Type</th>
          <th className={styles.top}>Amount</th>
          <th className={styles.top}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionRecord
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
