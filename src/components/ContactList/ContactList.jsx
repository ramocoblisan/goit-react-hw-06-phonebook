import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getStatusFilter } from '../../redux/selectors';
import { deleteContacts} from '../../redux/contactsSlice';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleFilteredContacts = (contacts, filter) => {
    return contacts.filter(contact => {
      return typeof contact.name === 'string' && contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  

  const filteredContacts = Array.isArray(contacts) ? handleFilteredContacts(contacts, filter) : [];

  if (!Array.isArray(contacts)) {
    console.error('Contacts is not an array:', contacts);
    return null;
  }

  return (
    <div className={styles.containerContacts}>
      <h3 className={styles.titleContact}>Contact List:</h3>
      <ul className={styles.itemsContact}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={styles.itemContact}>
            {`${contact.name}: ${contact.number}`}
            <div className={styles.containerBtnDel}>
              <button className={styles.btnDelete} onClick={() => dispatch(deleteContacts(contact.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default ContactList;