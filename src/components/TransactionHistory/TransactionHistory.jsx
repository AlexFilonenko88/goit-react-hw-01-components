import PropTypes from 'prop-types';
import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({ items }) => {
  const component = items.map(({id, type, amount, currency}) => {
  return (
          <tr key={id}>
            <th>{type}</th>
            <th>{amount}</th>
            <th>{currency}</th>
          </tr>
        );
    });

    return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{component}</tbody>
    </table>
  );
}



TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
}