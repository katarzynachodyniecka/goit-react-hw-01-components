import PropTypes from 'prop-types';
import styles from './TransactionRecord.module.css';

export const TransactionRecord = ({ type, amount, currency }) => {
  return (
    <>
      <tr className={styles.row}>
        <td className={styles.cell}>{type}</td>
        <td className={styles.cell}>{amount}</td>
        <td className={styles.cell}>{currency}</td>
      </tr>
    </>
  );
};

TransactionRecord.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
