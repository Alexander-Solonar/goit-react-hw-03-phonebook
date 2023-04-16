import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onfilterChange }) => {
  return (
    <label className={css.label}>
      <span>Find contacts by name</span>

      <input
        className={css.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value}
        onChange={onfilterChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onfilterChange: PropTypes.func.isRequired,
};

export default Filter;
