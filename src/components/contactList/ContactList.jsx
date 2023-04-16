import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ data, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {data.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <span className={css.name}>{name}:</span>
          <span className={css.number}> {number}</span>
          <button
            className={css.button}
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
