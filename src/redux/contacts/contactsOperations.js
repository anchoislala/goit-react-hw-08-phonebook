import axios from "axios";
// import {
//     addContactRequest,
//     addContactSuccess,
//     addContactError,
//     deleteContactRequest,
//     deleteContactSuccess,
//     deleteContactError,
//     toggleCompletedRequest,
//     toggleCompletedSuccess,
//     toggleCompletedError,
//     fetchContactsRequest,
//     fetchContactsSuccess,
//     fetchContactsError,
// } from actions

const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());

    try {
        const { data } = await axios.get('/contacts');
        
        dispatch(fetchContactsSuccess(data));
    } catch (error) {
        dispatch(fetchContactsError(error.message));
    }
}


const addContact = descriptionContact => dispatch => {
    
    dispatch(addContactRequest());

    axios.post('./contacts', descriptionContact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error.message)));
};




// import { createAsyncThunk } from '@reduxjs/toolkit'
// import * as contactsAPI from '../../services/contacts-api';

// export const fetchContacts = createAsyncThunk(
//     'contacts/fetchContacts',
//     async () => {
//         const contacts = await contactsAPI.fetchContacts();
//         return contacts;
//     }
// );

// export const addContact = createAsyncThunk(
//     'contacts/addContact',
//     async (contact) => {
//         const newContact = await contactsAPI.addContact(contact);
//         return newContact;
//     }
// );

// export const deleteContact = createAsyncThunk(
//     'contacts/deleteContact',
//     async (id) => {
//         const deletedContact = await contactsAPI.deleteContact(id);
//         return deletedContact;
//     }
// );
