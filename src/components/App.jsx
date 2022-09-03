import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateFiter } from "redux/contacts/contactsActions";
import { contactsOperations } from "redux/contacts";
import { addContact } from "redux/contacts/contactsOperations"; 
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";


export default function App() {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.entities);
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const formSubmitHandler = data => {

    const { name, number } = data;

    const contact = {
      name,
      phone: number,
    }
    
    const nameExists = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (nameExists) {
      alert(`${name} is already in contacts.`)
      return;
    }

    dispatch(addContact(contact));
  };

  const changeFilter = event => {
    dispatch(updateFiter(event.currentTarget.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <div
        style={{
          height: '100vh',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
      <h1>Phonebook</h1>

        <ContactForm onSubmit={formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={getFilteredContacts()}/>

      </div>
  )
}