import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  return (

    <ListItem key={id}>
      <ListItemAvatar>
        <Avatar>
          <ContactPhoneIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={number} />
      <Button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        variant="outlined"
        startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </ListItem>
    
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
   }),
};

export default ContactsItem;