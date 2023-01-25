import { ContactItem } from './ContactItem/ContactItem';
// import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import  { useSelector }  from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';

export const ContactList = ({ contactDelete }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // `console.log(contacts)`
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

// ContactList.propTypes = {
//   contactDelete: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };