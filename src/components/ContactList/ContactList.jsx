import { ContactItem } from './ContactItem/ContactItem';
import css from '../ContactList/ContactList.module.css';
import  { useSelector }  from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <ul className={css.namesList}>
      {filterContact.map(({ id, name, number }) => (
        <ContactItem
          id={id}
          key={id}
          name={name}
          number={number}
        />
      ))}
    </ul>
  );
};