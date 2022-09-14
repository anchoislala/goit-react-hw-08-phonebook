import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsSelectors } from "redux/contacts";
import { fetchContacts, addContact } from "redux/contacts"; 
import { Helmet } from "react-helmet";
import { updateFiter } from "redux/contacts/contactsActions";
import ContactList from "components/ContactList";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";


export default function Contacts() {
    const dispatch = useDispatch();
    const isLoadingContacts = useSelector(contactsSelectors.getLoading);
    const contacts = useSelector(contactsSelectors.getAllContacts);
    const filteredContacts = useSelector(contactsSelectors.getVisibleContacts);
    const filter = useSelector(contactsSelectors.getFilter);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    const formSubmitHandler = data => {

        const { name, number } = data;
        const contact = {
            name,
            number,
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
    
    return (
        
        <div>
            <Helmet>
                <title>Contacts</title>
            </Helmet>

            <ContactForm onSubmit={formSubmitHandler} />

            {isLoadingContacts && <h3>Loading...</h3>}

            <Filter value={filter} onChange={changeFilter} />
            <ContactList contacts={filteredContacts} />
            
        </div>
    ); 
};