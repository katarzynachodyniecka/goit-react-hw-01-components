import PropTypes from 'prop-types';
import styles from './StatisticsElement.module.css';

export const StatisticsElement = ({ label, percentage }) => {
  return (
    <li
      className={styles.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={styles.label}>{label}</span>
      <span className={percentage}>{percentage}</span>
    </li>
  );
};

StatisticsElement.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
