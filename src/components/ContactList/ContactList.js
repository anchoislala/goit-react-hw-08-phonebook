import PropTypes from 'prop-types';
import ContactsItem from '../ContactsItem';
import FolderList from "./ContactList.styled";

const ContactList = ({ contacts }) => (
    <FolderList>
        {contacts.map(({ id, name, number }) => (
            <ContactsItem
                key={id}
                contact={{ id, name, number }} />
        ))}
    </FolderList>
);

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
};

export default ContactList;


