import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import css from './phonebook-css/ContactList.module.css';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  const loading = useSelector(contactsSelectors.getLoading);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <li key={id} className={css.item}>
      <div>
        <span>{name}: </span>
        <span>{number}</span>
      </div>
      <button
        className={css.btn}
        onClick={() => {
          onDeleteContact(id);
          toast.success(`Contact '${name}' deleted`);
        }}
        disabled={loading}
      >
        delete
      </button>
    </li>
  );
}
