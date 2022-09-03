import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contacts/contactsOperations';
import { ContactInfo, ContactInformation, DeleteButton } from "./ContactsItem.styled";


const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, phone } = contact;
  return (
    <ContactInfo key={id}>
      <ContactInformation>- {name}: {phone}</ContactInformation>
      <DeleteButton type="button"
        onClick={() => dispatch(deleteContact(id))}
      >Delete</DeleteButton>
    </ContactInfo>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
   }),
};

export default ContactsItem;