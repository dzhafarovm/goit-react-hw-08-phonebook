import { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import shortid from 'shortid';

import { LoaderSpinnerDots } from 'Components/Spinner/spinner';
import { useCreateContactMutation } from 'redux/Phonebook/ContactSlice.jsx';
import css from './phonebook-css/ContactForm.module.css';

export default function ContactForm({ contacts }) {
  const [createContact, { isLoading }] = useCreateContactMutation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const nameId = useRef(shortid.generate());
  const phoneId = useRef(shortid.generate());

  const handleContactChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'phone':
        setPhone(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const toastStyle = {
      style: {
        borderRadius: '10px',
        background: '#e8f2f2',
        color: '#000',
      },
    };

    if (contacts.find(con => con.name.toLowerCase() === name.toLowerCase())) {
      toast(`Name '${name}' is alresdy in contacts`, toastStyle);

      return;
    }

    if (contacts.find(con => con.phone === phone)) {
      toast(`Number '${phone}' is alresdy in contacts`, toastStyle);
      return;
    }

    createContact({ name, phone });
    toast.success(`Contact '${name}' is added`);

    setName('');
    setPhone('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor={nameId.current} className={css.label}>
          Name:
          <input
            className={css.name}
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            id={nameId.current}
            onChange={handleContactChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <br />

        <label htmlFor={phoneId.current} className={css.label}>
          Number:
          <input
            className={css.number}
            type="tel"
            name="phone"
            placeholder="Enter number"
            value={phone}
            id={phoneId.current}
            onChange={handleContactChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <br />

        <button type="submit" className={css.btn} disabled={isLoading}>
          {isLoading ? <LoaderSpinnerDots /> : 'add contact'}
        </button>
      </form>
    </div>
  );
}
