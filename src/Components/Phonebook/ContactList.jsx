import ContactListItem from './ContactItem';
import css from './phonebook-css/ContactList.module.css';

export default function ContactList({ contacts }) {
  contacts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
}
