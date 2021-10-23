import css from './phonebook-css/Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <input
        className={css.inp}
        type="text"
        placeholder="Enter contact's name"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
