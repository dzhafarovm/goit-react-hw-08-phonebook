import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import ContactForm from './ContactForm.jsx';
import ContactList from './ContactList.jsx';
import Filter from './Filter';
import { LoaderSpinner } from 'Components/Spinner/spinner';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import css from './phonebook-css/Phonebook.module.css';

export default function Phonebook() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllContacts);
  const loading = useSelector(contactsSelectors.getLoading);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <div className={css.phonebookBox}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>

      {contacts.length !== 0 ? (
        <Filter />
      ) : (
        <h3>Your contacts list is empty</h3>
      )}

      {loading && <LoaderSpinner />}

      <ContactList />

      <Toaster position="top-right" />
    </div>
  );
}
